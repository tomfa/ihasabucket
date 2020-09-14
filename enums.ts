/* eslint-disable no-shadow */

export enum QUESTION_ID {
  storageType = 'storage-type',
  webappIsStatic = 'webapp-type',
  aclPublic = 'acl-public',
  stagingEnv = 'staging-env',
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
}

export const getInputDescription = (input: INPUT): string => {
  return {
    [INPUT.BUCKET_NAME]: 'Name of S3 bucket',
    [INPUT.AWS_REGION]: 'Region to deploy to, e.g. eu-north-1, us-east-1',
    [INPUT.AWS_ACCESS_KEY]:
      'e.g. AKIA... found in your AWS console > Security credentials',
    [INPUT.AWS_SECRET_KEY]:
      'e.g. yaAS$1... found in your AWS console > Security credentials',
  }[input];
};
