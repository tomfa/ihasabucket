import { domainIsApex, domainIsWWW, getApexDomain } from '../domain';
import { INPUT } from '../../enums';
import { QuestionSummary, BucketProp } from './types';

export const getRegionTfValue = (region: string): string =>
  region ? `"${region}"` : `var.${INPUT.AWS_REGION}`;

export const getBucketModuleNames = ({
  webApp,
  staging,
  forwardingBucket,
}: QuestionSummary): BucketProp => {
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

export const getBucketTfValues = ({
  forwardingBucket,
  staging,
  bucketName,
}: QuestionSummary): BucketProp => {
  return {
    staging: staging ? `"${getStagingBucketName(bucketName)}"` : null,
    main: getBucketNameTfValue(bucketName),
    redirect: forwardingBucket ? `"${forwardingBucket}"` : null,
  };
};
export const getBucketNameTfValue = (bucketName: string): string =>
  bucketName ? `"${bucketName}"` : `var.${INPUT.BUCKET_NAME}`;
export const getStagingBucketName = (bucketName: string): string => {
  if (!bucketName) {
    return `staging.\\$\{var.bucket_name}`;
  }
  return getStagingDomain(bucketName);
};
export const getIAMBucketUserNameTfValue = (bucketName: string): string => {
  if (!bucketName) {
    return `"\\$\{var.bucket_name}-user"`;
  }
  return `"${bucketName}-user"`;
};

export const getStagingDomain = (domain: string): string => {
  if (domainIsApex(domain) || domainIsWWW(domain)) {
    const apex = getApexDomain(domain);
    return `staging.${apex}`;
  }
  return `staging-${domain}`;
};

export const getBucketDomains = ({
  bucketName,
  staging,
  forwardingBucket,
}: QuestionSummary): BucketProp => {
  const stagingBucket = staging ? getStagingDomain(bucketName) : null;
  return {
    staging: stagingBucket,
    main: bucketName,
    redirect: forwardingBucket || null,
  };
};
