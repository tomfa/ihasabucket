import { INPUT } from '../../enums';
import { ModuleSpec, TerraformProps } from './types';
import { getBucketModuleNames, getStagingBucketName } from './names';

export const getFileStorageBucketTfContent = (
  props: TerraformProps
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
      bucket_name: bucketName ? `"${bucketName}"` : `var.${INPUT.BUCKET_NAME}`,
      aws_region: region ? `"${region}"` : `var.${INPUT.AWS_REGION}`,
      acl: shared ? '"public-read"' : '"private"',
    },
  });
  if (props.staging) {
    tfContent.push({
      name: names.staging,
      source: 'git::https://github.com/tomfa/terraform.git//files',
      parameters: {
        bucket_name: `"${getStagingBucketName(bucketName)}"`,
        aws_region: region ? `"${region}"` : `var.${INPUT.AWS_REGION}`,
        acl: shared ? '"public-read"' : '"private"',
      },
    });
  }
  return tfContent;
};
