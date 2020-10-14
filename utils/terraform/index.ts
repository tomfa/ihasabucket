/* eslint-disable camelcase */

import {
  BUCKET_TYPE,
  getInputDescription,
  getOutput,
  INPUT,
} from '../../enums';
import { domainIsApex, domainIsWWW, getApexDomain } from '../domain';
import {
  TerraformProps,
  BucketProp,
  ModuleSpec,
  TerraformPackage,
  BucketTargets,
  Target,
} from './types';

const getBucketModuleNames = ({
  webApp,
  staging,
  forwardingBucket,
}: TerraformProps): BucketProp => {
  const genericBucketName = webApp ? 'web-app' : 'file-storage';
  const mainBucket = staging
    ? `${genericBucketName}-production`
    : genericBucketName;
  const stagingBucket = staging ? `${genericBucketName}-staging` : null;
  return {
    staging: stagingBucket,
    main: mainBucket,
    redirect: forwardingBucket ? 'redirect' : null,
  };
};

const getBucketDomains = ({
  bucketName,
  staging,
  forwardingBucket,
}: TerraformProps): BucketProp => {
  const stagingBucket = staging ? getStagingDomain(bucketName) : null;
  return {
    staging: stagingBucket,
    main: bucketName,
    redirect: forwardingBucket || null,
  };
};

const getBucketTargetRefs = (props: TerraformProps): BucketTargets => {
  const moduleNames = getBucketModuleNames(props);
  const s3TargetNameAttr = 'BUCKET_WEBSITE_DOMAIN';
  const s3TargetZoneIdAttr = 'BUCKET_ZONE_ID';
  const cloudFrontTargetNameAttr = 'CLOUDFRONT_URL';
  const cloudFrontTargetZoneIdAttr = 'CLOUDFRONT_ZONE_ID';
  const getTarget = (moduleName: string, usesS3: boolean): null | Target => {
    if (!moduleName) {
      return null;
    }
    return {
      target_name:
        `module.${moduleName}.` +
        (usesS3 ? s3TargetNameAttr : cloudFrontTargetNameAttr),
      target_zone_id:
        `module.${moduleName}.` +
        (usesS3 ? s3TargetZoneIdAttr : cloudFrontTargetZoneIdAttr),
    };
  };
  return {
    staging: getTarget(moduleNames.staging, !props.webApp),
    main: getTarget(moduleNames.main, !props.webApp),
    redirect: getTarget(moduleNames.redirect, true),
  };
};

const getDomainTfContent = ({
  configureDns,
  bucketName,
}: TerraformProps): ModuleSpec[] => {
  if (!configureDns) {
    return [];
  }
  const apexDomain = getApexDomain(bucketName);
  return [
    {
      name: 'domain',
      source: 'git::https://github.com/tomfa/terraform.git//domain',
      parameters: { domain: `"${apexDomain}"` },
    },
  ];
};

const getDomainRecordTfContent = (props: TerraformProps): ModuleSpec[] => {
  const { configureDns, forwardingBucket, staging } = props;
  if (!configureDns) {
    return [];
  }

  const domains = getBucketDomains(props);
  const targets = getBucketTargetRefs(props);

  const tfContent: ModuleSpec[] = [
    {
      name: 'bucket_record',
      source: 'git::https://github.com/tomfa/terraform.git//alias_record',
      parameters: {
        dns_zone_id: `module.domain.DOMAIN_ZONE_ID`,
        domain: `"${domains.main}"`,
        ...targets.main,
      },
    },
  ];

  if (staging) {
    tfContent.push({
      name: 'staging_record',
      source: 'git::https://github.com/tomfa/terraform.git//alias_record',
      parameters: {
        dns_zone_id: `module.domain.DOMAIN_ZONE_ID`,
        domain: `"${domains.staging}"`,
        ...targets.staging,
      },
    });
  }

  if (forwardingBucket) {
    tfContent.push({
      name: 'redirect_record',
      source: 'git::https://github.com/tomfa/terraform.git//alias_record',
      parameters: {
        dns_zone_id: `module.domain.DOMAIN_ZONE_ID`,
        domain: `"${domains.redirect}"`,
        ...targets.redirect,
      },
    });
  }

  return tfContent;
};

const getCertificateTfContent = ({
  createCertificates,
  bucketName,
}: TerraformProps): ModuleSpec[] => {
  if (!createCertificates) {
    return [];
  }
  const apexDomain = getApexDomain(bucketName);
  const alternativeMames = [`*.${apexDomain}`];
  if (bucketName !== apexDomain) {
    alternativeMames.push(bucketName);
  }
  alternativeMames.push(getStagingDomain(bucketName));
  const alternativeNameString =
    alternativeMames.length > 0 ? `["${alternativeMames.join('","')}"]` : '[]';
  return [
    {
      name: 'certificate',
      source: 'git::https://github.com/tomfa/terraform.git//certificate',
      parameters: {
        domain: `"${apexDomain}"`,
        alternative_names: `${alternativeNameString}`,
      },
    },
  ];
};

const getRedirectBucketTfContent = ({
  forwardingBucket,
  bucketName,
  region,
}: TerraformProps): ModuleSpec[] => {
  if (!forwardingBucket) {
    return [];
  }
  return [
    {
      name: 'redirect',
      source: `"git::https://github.com/tomfa/terraform.git//redirect"`,
      parameters: {
        bucket_name: `"${forwardingBucket}"`,
        redirect_url: `"${bucketName}"`,
        aws_region: `"${region}"`,
      },
    },
  ];
};

const getFileStorageBucketTfContent = (props: TerraformProps): ModuleSpec[] => {
  if (props.webApp) {
    return [];
  }
  const tfContent: ModuleSpec[] = [];
  const names = getBucketModuleNames(props);
  const { bucketName, region, shared } = props;
  tfContent.push({
    name: names.main,
    source: 'git::https://github.com/tomfa/terraform.git//files',
    parameters: {
      bucket_name: bucketName ? `"${bucketName}"` : `var.${INPUT.BUCKET_NAME}`,
      aws_region: region ? `"${region}"` : `var.${INPUT.AWS_REGION}`,
      acl: shared ? '"public-read"' : '"private"',
    },
  });
  if (props.staging) {
    tfContent.push({
      name: names.staging,
      source: 'git::https://github.com/tomfa/terraform.git//files',
      parameters: {
        bucket_name: `"${getStagingBucketName(bucketName)}"`,
        aws_region: region ? `"${region}"` : `var.${INPUT.AWS_REGION}`,
        acl: shared ? '"public-read"' : '"private"',
      },
    });
  }
  return tfContent;
};

const getWebAppBucketTfContent = (props: TerraformProps): ModuleSpec[] => {
  if (!props.webApp) {
    return [];
  }
  const names = getBucketModuleNames(props);
  const { bucketName, region, staticPage, errorPath } = props;
  const bucketSpec: ModuleSpec = {
    name: names.main,
    source: 'git::https://github.com/tomfa/terraform.git//webapp',
    parameters: {
      bucket_name: bucketName ? `"${bucketName}"` : `var.${INPUT.BUCKET_NAME}`,
      aws_region: region ? `"${region}"` : `var.${INPUT.AWS_REGION}`,
      error_path: staticPage && errorPath ? `"/${errorPath}"` : '"/index.html"',
      error_code: staticPage ? '404' : '200',
    },
  };

  if (props.createCertificates) {
    bucketSpec.parameters.certificate_arn =
      'module.certificate.CERTIFICATE_ARN';
  }
  if (props.configureDns && bucketName) {
    bucketSpec.parameters.domain_aliases = `["${bucketName}"]`;
  }

  if (!props.staging) {
    return [bucketSpec];
  }

  const stagingSpec: ModuleSpec = {
    ...bucketSpec,
    name: names.staging,
    parameters: {
      ...bucketSpec.parameters,
      bucket_name: `"${getStagingBucketName(bucketName)}"`,
    },
  };

  if (props.configureDns && bucketName) {
    stagingSpec.parameters.domain_aliases = `["${getStagingDomain(
      bucketName
    )}"]`;
  }

  return [bucketSpec, stagingSpec];
};

const getStagingBucketName = (bucketName: string): string => {
  if (!bucketName) {
    return `staging.\\$\{var.bucket_name}`;
  }
  return getStagingDomain(bucketName);
};

const getStagingDomain = (domain: string): string => {
  if (domainIsApex(domain) || domainIsWWW(domain)) {
    const apex = getApexDomain(domain);
    return `staging.${apex}`;
  }
  return `staging-${domain}`;
};

const getMainTfContent = (props: TerraformProps): string[] => {
  const modules: ModuleSpec[] = [];
  modules.push(...getDomainTfContent(props));
  modules.push(...getDomainRecordTfContent(props));
  modules.push(...getCertificateTfContent(props));
  if (props.webApp) {
    modules.push(...getWebAppBucketTfContent(props));
  } else {
    modules.push(...getFileStorageBucketTfContent(props));
  }
  modules.push(...getRedirectBucketTfContent(props));
  modules.push(...getCertificateTfContent(props));
  const lines: string[] = [];

  const isUsed = (inputVariable: string): boolean =>
    !!modules.find(
      (m) =>
        !!Object.values(m.parameters).find((p) =>
          p.includes(`var.${inputVariable}`)
        )
    );
  Object.values(INPUT)
    .filter(isUsed)
    .forEach((input: INPUT) => {
      const description = getInputDescription(input);
      if (!description) {
        lines.push(`variable "${input}" {}`);
      } else {
        lines.push(`variable "${input}" {`);
        lines.push(`  description = "${description}"`);
        lines.push(`}`);
      }
    });
  modules.forEach((module) => {
    lines.push('');
    lines.push(`module "${module.name}" {`);
    lines.push(`  source = "${module.source}"`);
    Object.entries(module.parameters).forEach(([key, value]) => {
      lines.push(`  ${key} = ${value}`);
    });
    lines.push(`}`);
  });
  lines.push('');
  getOutput({
    bucketType: props.webApp ? BUCKET_TYPE.WEBAPP : BUCKET_TYPE.FILE_STORAGE,
    hasStaging: props.staging,
  }).forEach((output) => {
    lines.push(`output "${output.label}" {`);
    lines.push(`  value = ${output.value}`);
    lines.push('}');
  });
  return lines;
};

const getTerraPackageDescription = ({
  webApp,
  staging,
  shared,
  staticPage,
  region,
}: TerraformProps): string => {
  const count = staging ? 'two sets of' : 'a';
  const usecase = getUseCaseDescription({ webApp, staticPage, shared });
  const iamUserInfo = staging
    ? 'Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment'
    : 'A set of AWS keys will be created that is able to upload to the bucket';
  const generatedKeysInfo = `${iamUserInfo}. Generated keys will be shown as output in the terminal. These can be used to upload new versions of the app to the bucket.`;
  return `Once run, it will create ${count} S3 bucket${
    webApp ? ' + Cloudfront' : ''
  } in ${region}, configured ${usecase}. ${generatedKeysInfo}`;
};

const getUseCaseDescription = ({
  webApp,
  staticPage,
  shared,
}: {
  webApp: boolean;
  shared: boolean;
  staticPage: boolean;
}): string => {
  if (webApp) {
    if (staticPage) {
      return 'to serve a solid statically generated web app';
    }
    return 'to serve a blazingly fast single-page web app';
  }
  if (shared) {
    return 'for hosting publicly available files';
  }
  return 'for storing and serving files for authorized requests';
};

export const getTerraFormPackage = (
  props: TerraformProps
): TerraformPackage => {
  return {
    mainTfContent: getMainTfContent(props),
    description: getTerraPackageDescription(props),
  };
};
