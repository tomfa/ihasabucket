import { INPUT } from '../../enums';
import { ModuleSpec, QuestionSummary } from './types';
import {
  getBucketModuleNames,
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
      bucket_name: bucketName ? `"${bucketName}"` : `var.${INPUT.BUCKET_NAME}`,
      aws_region: region ? `"${region}"` : `var.${INPUT.AWS_REGION}`,
      error_path: staticPage && errorPath ? `"/${errorPath}"` : '"/index.html"',
      error_code: staticPage ? '404' : '200',
    },
  };

  if (props.createCertificates) {
    bucketSpec.parameters.certificate_arn =
      'module.certificate.CERTIFICATE_ARN';
  }
  if (props.configureDns && bucketName) {
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

  if (props.configureDns && bucketName) {
    stagingSpec.parameters.domain_aliases = `["${getStagingDomain(
      bucketName
    )}"]`;
  }

  return [bucketSpec, stagingSpec];
};
