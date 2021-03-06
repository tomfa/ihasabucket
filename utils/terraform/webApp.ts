import { ModuleSpec, QuestionSummary } from './types';
import {
  getBucketModuleNames,
  getBucketNameTfValue,
  getRegionTfValue,
  getStagingBucketName,
  getStagingDomain,
} from './names';

export const getWebAppBucketTfContent = (
  props: QuestionSummary
): ModuleSpec[] => {
  if (!props.webApp) {
    return [];
  }
  const names = getBucketModuleNames(props);
  const { bucketName, region, staticPage, errorPath } = props;
  const bucketSpec: ModuleSpec = {
    name: names.main,
    source: 'git::https://github.com/tomfa/terraform.git//webapp',
    parameters: {
      bucket_name: getBucketNameTfValue(bucketName),
      aws_region: getRegionTfValue(region),
      error_path: staticPage && errorPath ? `"/${errorPath}"` : '"/index.html"',
      error_code: staticPage ? '404' : '200',
    },
  };

  if (props.createCertificates) {
    bucketSpec.parameters.certificate_arn =
      'module.certificate.CERTIFICATE_ARN';
  }
  if (bucketName) {
    bucketSpec.parameters.domain_aliases = `["${bucketName}"]`;
  }

  if (!props.staging) {
    return [bucketSpec];
  }

  const stagingSpec: ModuleSpec = {
    ...bucketSpec,
    name: names.staging,
    parameters: {
      ...bucketSpec.parameters,
      bucket_name: `"${getStagingBucketName(bucketName)}"`,
    },
  };

  if (bucketName) {
    stagingSpec.parameters.domain_aliases = `["${getStagingDomain(
      bucketName
    )}"]`;
  }

  return [bucketSpec, stagingSpec];
};
