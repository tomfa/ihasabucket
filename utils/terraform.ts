import { BUCKET_TYPE, getInputDescription, getOutput, INPUT } from '../enums';

type Props = {
  webApp: boolean;
  staging: boolean;
  shared: boolean;
  staticPage: boolean;
  region: string;
  bucketName: string;
};

type TerraformPackage = {
  mainTfContent: string[];
  description?: string;
};

const getMainTfContent = ({
  webApp,
  staging,
  shared,
  staticPage,
  region,
  bucketName,
}: Props): string[] => {
  const source = webApp
    ? 'git::https://github.com/tomfa/terraform.git//webapp'
    : 'git::https://github.com/tomfa/terraform.git//files';

  const parameters: { [param: string]: string } = {
    bucket_name: bucketName ? `"${bucketName}"` : `var.${INPUT.BUCKET_NAME}`,
    aws_region: region ? `"${region}"` : `var.${INPUT.AWS_REGION}`,
  };
  if (webApp) {
    parameters.error_path = '"/index.html"';
    parameters.error_code = staticPage ? '404' : '200';
  } else {
    parameters.acl = shared ? '"public-read"' : '"private"';
  }

  const genericBucketName = webApp ? 'web-app' : 'file-storage';
  const modules = staging
    ? [
        {
          name: `${genericBucketName}-production`,
          parameters,
        },
        {
          name: `${genericBucketName}-staging`,
          parameters: {
            ...parameters,
            bucket_name: bucketName
              ? `"${bucketName}.staging"`
              : `"\\$\{var.bucket_name}.staging"`,
          },
        },
      ]
    : [{ name: genericBucketName, parameters }];

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
    lines.push(`  source = "${source}"`);
    Object.entries(module.parameters).forEach(([key, value]) => {
      lines.push(`  ${key} = ${value}`);
    });
    lines.push(`}`);
  });
  lines.push('');
  getOutput({
    bucketType: webApp ? BUCKET_TYPE.WEBAPP : BUCKET_TYPE.FILE_STORAGE,
    hasStaging: staging,
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
}: Props): string => {
  const count = staging ? 'two sets of' : 'a';
  const usecase = getUseCaseDescription({ webApp, staticPage, shared });
  const iamUserInfo = staging
    ? 'Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment'
    : 'A set of AWS keys will be created that is able to upload to the bucket';
  return `Once run, it will create ${count} S3 bucket${
    webApp ? ' + Cloudfront' : ''
  } in ${region}, configured ${usecase}. ${iamUserInfo}. Generated keys will be shown as output in the terminal.`;
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

export const getTerraFormPackage = (props: Props): TerraformPackage => {
  return {
    mainTfContent: getMainTfContent(props),
    description: getTerraPackageDescription(props),
  };
};
