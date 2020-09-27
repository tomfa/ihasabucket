/* eslint-disable no-shadow */

export enum QUESTION_ID {
  apexForwarding = 'apex-forwarding',
  wwwForwarding = 'www-forwarding',
  createCertificates = 'certificates',
  bucketName = 'bucket',
  storageType = 'storage',
  webappIsStatic = 'static',
  aclPublic = 'public',
  configureDns = 'dns',
  stagingEnv = 'staging',
  region = 'region',
}

export enum BOOL_VALUE {
  FALSE = 'false',
  TRUE = 'true',
}

export enum INPUT {
  BUCKET_NAME = 'bucket_name',
  AWS_REGION = 'aws_region',
  AWS_ACCESS_KEY = 'aws_access_key',
  AWS_SECRET_KEY = 'aws_secret_key',
  ACL = 'acl',
  ERROR_RESPONSE_CODE = 'error_response_code',
  ERROR_RESPONSE_PATH = 'error_response_path',
}

export const getInputDescription = (input: INPUT): string => {
  return {
    [INPUT.BUCKET_NAME]: 'Name of S3 bucket',
    [INPUT.AWS_REGION]: 'Region to deploy to, e.g. eu-north-1, us-east-1',
    [INPUT.AWS_ACCESS_KEY]:
      'e.g. AKIA... found in your AWS console > Security credentials',
    [INPUT.AWS_SECRET_KEY]:
      'e.g. yaAS$1... found in your AWS console > Security credentials',
    [INPUT.ACL]:
      'e.g. AKIA... found in your AWS console > Security credentials',
    [INPUT.ERROR_RESPONSE_CODE]:
      'e.g. HTTP status code response when no file matching path is found',
    [INPUT.ERROR_RESPONSE_PATH]:
      'e.g. Which file Cloudfront serves when encountering a missing file',
  }[input];
};

export enum BUCKET_TYPE {
  WEBAPP = 'web-app',
  FILE_STORAGE = 'file-storage',
}

export const getOutput = ({
  bucketType,
  hasStaging,
}: {
  bucketType: BUCKET_TYPE;
  hasStaging: boolean;
}): { value: string; label: string }[] => {
  const outputs = [];
  const bucketNames = hasStaging
    ? [`${bucketType}-production`, `${bucketType}-staging`]
    : [bucketType];
  bucketNames.forEach((name) => {
    const stageName = hasStaging && name.split('-')[name.split('-').length - 1];
    const prefix = stageName ? `${stageName}.` : '';
    outputs.push({
      value: `module.${name}.AWS_SECRET_ACCESS_KEY`,
      label: `${prefix}AWS_SECRET_ACCESS_KEY`,
    });
    outputs.push({
      value: `module.${name}.AWS_ACCESS_KEY_ID`,
      label: `${prefix}AWS_ACCESS_KEY_ID`,
    });
    outputs.push({
      value: `module.${name}.BUCKET_NAME`,
      label: `${prefix}BUCKET_NAME`,
    });

    if (bucketType === BUCKET_TYPE.WEBAPP) {
      outputs.push({
        value: `module.${name}.CLOUDFRONT_URL`,
        label: `${prefix}CLOUDFRONT_URL`,
      });
    }
  });
  return outputs;
};

export enum AWS_REGIONS {
  US_EAST_2 = 'us-east-2',
  US_EAST_1 = 'us-east-1',
  US_WEST_1 = 'us-west-1',
  US_WEST_2 = 'us-west-2',
  AF_SOUTH_1 = 'af-south-1',
  AP_EAST_1 = 'ap-east-1',
  AP_SOUTH_1 = 'ap-south-1',
  AP_NORTHEAST_3 = 'ap-northeast-3',
  AP_NORTHEAST_2 = 'ap-northeast-2',
  AP_SOUTHEAST_1 = 'ap-southeast-1',
  AP_SOUTHEAST_2 = 'ap-southeast-2',
  AP_NORTHEAST_1 = 'ap-northeast-1',
  CA_CENTRAL_1 = 'ca-central-1',
  CN_NORTH_1 = 'cn-north-1',
  CN_NORTHWEST_1 = 'cn-northwest-1',
  EU_CENTRAL_1 = 'eu-central-1',
  EU_WEST_1 = 'eu-west-1',
  EU_WEST_2 = 'eu-west-2',
  EU_SOUTH_1 = 'eu-south-1',
  EU_WEST_3 = 'eu-west-3',
  EU_NORTH_1 = 'eu-north-1',
  SA_EAST_1 = 'sa-east-1',
  ME_SOUTH_1 = 'me-south-1',
}
