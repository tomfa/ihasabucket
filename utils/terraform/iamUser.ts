import { QuestionSummary, ModuleSpec } from './types';

export const getIAMUserTfContent = ({
  webApp,
  bucketName,
}: QuestionSummary): ModuleSpec[] => {
  if (!bucketName) {
    return [];
  }
  const parameters: Record<string, string> = {
    bucket_names: `["${bucketName}"]`,
    iam_user_name: `"${bucketName}-user"`,
  };
  if (webApp) {
    parameters.cloudfront_distribution_ids = `[module.web-app.CLOUDFRONT_DISTRIBUTION_ID]`;
  }
  return [
    {
      name: 'user',
      source: `git::https://github.com/tomfa/terraform.git//user`,
      parameters,
    },
  ];
};
