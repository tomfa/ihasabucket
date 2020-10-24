import { QuestionSummary } from './types';

export const getTerraPackageDescription = (
  props: QuestionSummary
): string[] => {
  const certificateWarningText = getCertificateWarning(props);
  const outcomeText = getOutcomeDescription(props);
  return [certificateWarningText, outcomeText].filter((t) => !!t);
};

const getCertificateWarning = (props: QuestionSummary): string => {
  if (!props.createCertificates) {
    return '';
  }
  if (props.configureDns) {
    return (
      'During the setup, we will request HTTPS certificates for your domain, and verify that they are set up correctly. ' +
      'This means that the DNS changes you made has propagate before it continues. Until then, the script will not complete. ' +
      'Instead, it may time out. No worries though, just re-run the script after a while, when the DNS records are correct. ' +
      'It will continue where it left off.'
    );
  }
  return (
    'During the setup, we will request HTTPS certificates for your domain, and verify that they are set up correctly. ' +
    'This means you will have to go to change your DNS pointers as specified in the Certificate Manager in the AWS console. ' +
    'These instructions will be shown under the certificate in status "Pending Verification", which will show up after you have start this script. ' +
    'Until that is done, -and- the DNS changes have propageted, the script WILL NOT COMPLETE. ' +
    'Instead, it will likely time out. No worries though, just re-run the script after a while, when the DNS records are correct. ' +
    'It will continue where it left off.'
  );
};

const getOutcomeDescription = (props: QuestionSummary): string => {
  const useCaseText = getUseCaseDescription(props);
  const count = props.staging ? 'two sets of' : 'a';
  const infraStructure = `S3 bucket${props.webApp ? ' + Cloudfront' : ''};`;
  return `Once run successfully, the script will create ${count} ${infraStructure} in ${props.region}, configured ${useCaseText}.`;
};

const getUseCaseDescription = ({
  webApp,
  staticPage,
  shared,
}: QuestionSummary): string => {
  if (webApp) {
    if (staticPage) {
      return 'to serve a solid statically generated web app';
    }
    return 'to serve a blazingly fast single-page web app';
  }
  if (shared) {
    return 'for hosting publicly available files';
  }
  return 'for storing and serving files for authorized requests';
};
