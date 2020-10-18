import { getApexDomain } from '../domain';
import { TerraformProps, ModuleSpec } from './types';
import { getStagingDomain } from './names';

export const getCertificateTfContent = ({
  createCertificates,
  bucketName,
  configureDns,
}: TerraformProps): ModuleSpec[] => {
  if (!createCertificates) {
    return [];
  }
  const apexDomain = getApexDomain(bucketName);
  const alternativeMames = [`*.${apexDomain}`];
  if (bucketName !== apexDomain) {
    alternativeMames.push(bucketName);
  }
  alternativeMames.push(getStagingDomain(bucketName));
  const alternativeNameString =
    alternativeMames.length > 0 ? `["${alternativeMames.join('","')}"]` : '[]';
  const certificateModule: ModuleSpec = {
    name: 'certificate',
    source: 'git::https://github.com/tomfa/terraform.git//certificate',
    parameters: {
      domain: `"${apexDomain}"`,
      alternative_names: `${alternativeNameString}`,
    },
  };
  if (configureDns) {
    certificateModule.parameters.route53_zone_id =
      'module.domain.DOMAIN_ZONE_ID';
  }
  return [certificateModule];
};
