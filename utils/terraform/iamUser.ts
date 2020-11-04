import { QuestionSummary, ModuleSpec } from './types';
import { getBucketTfValues, getIAMBucketUserNameTfValue } from './names';

export const getIAMUserTfContent = (props: QuestionSummary): ModuleSpec[] => {
  const parameters = getParams(props);
  return [
    {
      name: 'user',
      source: `git::https://github.com/tomfa/terraform.git//user`,
      parameters,
    },
  ];
};

const getParams = (props: QuestionSummary) => {
  const allBucketNamesTf = getBucketTfValues(props);
  const userNameTf = getIAMBucketUserNameTfValue(props.bucketName);
  const bucketNamesTf = Object.values(allBucketNamesTf).filter(
    (name) => !!name
  );
  const params: Record<string, string> = {
    bucket_names: `[${bucketNamesTf.join(', ')}]`,
    iam_user_name: userNameTf,
  };
  if (props.webApp) {
    params.cloudfront_distribution_ids = `[module.web-app.CLOUDFRONT_DISTRIBUTION_ID]`;
  }
  return params;
};
