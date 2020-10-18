import { getApexDomain } from '../domain';
import { QuestionSummary, ModuleSpec, BucketTargets, Target } from './types';
import { getBucketDomains, getBucketModuleNames } from './names';

const getBucketTargetRefs = (props: QuestionSummary): BucketTargets => {
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

export const getDomainTfContent = ({
  configureDns,
  bucketName,
}: QuestionSummary): ModuleSpec[] => {
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

export const getDomainRecordTfContent = (
  props: QuestionSummary
): ModuleSpec[] => {
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
