import { domainIsApex, domainIsWWW, getApexDomain } from '../domain';
import { QuestionSummary, BucketProp } from './types';

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

export const getStagingBucketName = (bucketName: string): string => {
  if (!bucketName) {
    return `staging.\\$\{var.bucket_name}`;
  }
  return getStagingDomain(bucketName);
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
