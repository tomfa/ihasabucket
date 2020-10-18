import { QuestionSummary } from './types';

export const getTerraPackageDescription = (
  props: QuestionSummary
): string[] => {
  const certificateWarningText = getCertificateWarning(props);
  const authText = getAuthDescription(props);
  const outcomeText = getOutcomeDescription(props);
  return [certificateWarningText, outcomeText, authText].filter((t) => !!t);
};

const getCertificateWarning = (props: QuestionSummary): string => {
  if (!props.createCertificates) {
    return '';
  }
  if (props.configureDns) {
    return (
      'During the setup, we will request HTTPS certificates for your domain, and verify that they are set up correctly. ' +
      'This means you will have to go to your registrar and change the DNS pointers to the AWS DNS servers. You can find their names in Route 53 in the AWS console. ' +
      'Until that is done, -and- the DNS changes have propageted, the script WILL NOT COMPLETE. ' +
      'Instead, it will likely time out. No worries though, just re-run the script after a while, when the DNS records are correct. ' +
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

const getAuthDescription = ({ staging }: QuestionSummary): string => {
  const keysInfo = staging
    ? 'Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment.'
    : 'A set of AWS keys will be created that is able to upload to the bucket.';
  const keysUsage =
    'Generated keys will be shown as output in the terminal. These can be used to upload new versions of the app to the bucket.';

  return `${keysInfo} ${keysUsage}`;
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
