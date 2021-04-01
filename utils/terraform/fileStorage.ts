import { ModuleSpec, QuestionSummary } from './types';
import {
  getBucketModuleNames,
  getBucketNameTfValue,
  getStagingBucketName,
  getRegionTfValue,
  getStagingDomain,
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
  const prodModule: ModuleSpec = {
    name: names.main,
    source: 'git::https://github.com/tomfa/terraform.git//files',
    parameters: {
      bucket_name: getBucketNameTfValue(bucketName),
      aws_region: getRegionTfValue(region),
      acl: shared ? '"public-read"' : '"private"',
    },
  };
  if (props.createCertificates) {
    prodModule.parameters.certificate_arn =
      'module.certificate.CERTIFICATE_ARN';
  }
  if (bucketName) {
    prodModule.parameters.domain_aliases = `["${bucketName}"]`;
  }
  tfContent.push(prodModule);

  if (props.staging) {
    const stagingModule: ModuleSpec = {
      name: names.staging,
      source: 'git::https://github.com/tomfa/terraform.git//files',
      parameters: {
        bucket_name: `"${getStagingBucketName(bucketName)}"`,
        aws_region: getRegionTfValue(region),
        acl: shared ? '"public-read"' : '"private"',
      },
    };
    if (props.createCertificates) {
      stagingModule.parameters.certificate_arn =
        'module.certificate.CERTIFICATE_ARN';
    }
    if (bucketName) {
      stagingModule.parameters.domain_aliases = `["${getStagingDomain(
        bucketName
      )}"]`;
    }
    tfContent.push(stagingModule);
  }
  return tfContent;
};
