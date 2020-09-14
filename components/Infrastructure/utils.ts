type Props = {
  webApp: boolean;
  staging: boolean;
  shared: boolean;
  staticPage: boolean;
};

type TerraformPackage = {
  url: string;
  description?: string;
};

const getTerraPackageUrl = ({
  webApp,
  staging,
  shared,
  staticPage,
}: Props): string => {
  const bucketType = webApp ? 'webapp' : 'files';
  const count = staging ? 'double' : 'single';
  const category = getBucketSubCategory({ webApp, shared, staticPage });
  return `git::https://github.com/tomfa/terraform.git//${bucketType}/${category}/${count}`;
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

const getBucketSubCategory = ({
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
      return 'static';
    }
    return 'singlepage';
  }
  if (shared) {
    return 'public';
  }
  return 'private';
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
    url: getTerraPackageUrl(props),
    description: getTerraPackageDescription(props),
  };
};
