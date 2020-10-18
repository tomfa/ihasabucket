import { QuestionSummary, ModuleSpec } from './types';

export const getRedirectBucketTfContent = ({
  forwardingBucket,
  bucketName,
  region,
}: QuestionSummary): ModuleSpec[] => {
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
