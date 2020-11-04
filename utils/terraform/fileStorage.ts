import { ModuleSpec, QuestionSummary } from './types';
import {
  getBucketModuleNames,
  getBucketNameTfValue,
  getStagingBucketName,
  getRegionTfValue,
} from './names';

export const getFileStorageBucketTfContent = (
  props: QuestionSummary
): ModuleSpec[] => {
  if (props.webApp) {
    return [];
  }
  const tfContent: ModuleSpec[] = [];
  const names = getBucketModuleNames(props);
  const { bucketName, region, shared } = props;
  tfContent.push({
    name: names.main,
    source: 'git::https://github.com/tomfa/terraform.git//files',
    parameters: {
      bucket_name: getBucketNameTfValue(bucketName),
      aws_region: getRegionTfValue(region),
      acl: shared ? '"public-read"' : '"private"',
    },
  });
  if (props.staging) {
    tfContent.push({
      name: names.staging,
      source: 'git::https://github.com/tomfa/terraform.git//files',
      parameters: {
        bucket_name: `"${getStagingBucketName(bucketName)}"`,
        aws_region: getRegionTfValue(region),
        acl: shared ? '"public-read"' : '"private"',
      },
    });
  }
  return tfContent;
};
