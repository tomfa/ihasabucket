import { QuestionSummary } from './terraform/types';

export const getShareTitle = ({
  bucketName,
  webApp,
  region,
  shared,
}: QuestionSummary): string | undefined => {
  const regionPostfix = region ? ` in ${region}` : '';
  if (bucketName && region) {
    return `Launch ${bucketName}${regionPostfix}`;
  }
  if (webApp && region) {
    return `Launch a web app ${regionPostfix}`;
  }
  if (!webApp && region) {
    const aclText = shared ? 'public' : 'private';
    return `Host ${aclText} files in ${regionPostfix}`;
  }
  return undefined;
};
