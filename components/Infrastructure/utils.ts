type Props = {
  webApp: boolean;
  staging: boolean;
  shared: boolean;
  staticPage: boolean;
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
}: Props): string[] => {
  const source = webApp
    ? 'git::https://github.com/tomfa/terraform-sandbox.git//s3-webfiles-with-cloudfront'
    : "'git::https://github.com/tomfa/terraform-sandbox.git//s3-privatefiles-with-cloudfront";
  // TODO: Remove aws_secret_key and access_key
  const defaultVariables = {
    'var.bucket_name': 'var.bucket_name',
    'var.aws_region': 'var.aws_region',
    'var.aws_access_key': 'var.aws_access_key',
    'var.aws_secret_key': 'var.aws_secret_key',
  };
  const genericBucketName = webApp ? 'web-app' : 'file-storage';
  const modules = staging
    ? [
        {
          name: `${genericBucketName}-production`,
          variables: defaultVariables,
        },
        {
          name: `${genericBucketName}-staging`,
          variables: {
            ...defaultVariables,
            'var.bucket_name': `"$\{var.bucket-name}.staging"`,
          },
        },
      ]
    : [{ name: genericBucketName, variables: defaultVariables }];

  // TODO: Add options for differentiating between static and shared
  if (shared && !webApp) {
    // eslint-disable-next-line no-console
    console.log('Missing support');
  }
  if (webApp && staticPage) {
    // eslint-disable-next-line no-console
    console.log('Missing support');
  }

  const lines: string[] = [];
  modules.forEach((module) => {
    lines.push('');
    lines.push(`module "${module.name}" {`);
    lines.push(`  source = "${source}"`);
    Object.entries(module.variables).forEach(([key, value]) => {
      lines.push(`  ${key} = ${value}`);
    });
    lines.push(`}`);
  });
  return lines;
};

const getTerraPackageDescription = ({
  webApp,
  staging,
  shared,
  staticPage,
}: Props): string => {
  const count = staging ? 'two sets of' : 'a';
  const usecase = getUseCaseDescription({ webApp, staticPage, shared });
  const iamUserInfo = staging
    ? 'Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment'
    : 'A set of AWS keys will be created that is able to upload to the bucket';
  return `Once run, it will create ${count} S3 bucket + Cloudfront, configured ${usecase}. ${iamUserInfo}.`;
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
