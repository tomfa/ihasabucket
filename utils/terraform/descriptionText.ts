import { TerraformProps } from './types';

export const getTerraPackageDescription = (props: TerraformProps): string => {
  const authText = getAuthDescription(props);
  const outcomeText = getOutcomeDescription(props);
  return `${outcomeText} ${authText}`;
};

const getOutcomeDescription = (props: TerraformProps): string => {
  const useCaseText = getUseCaseDescription(props);
  const count = props.staging ? 'two sets of' : 'a';
  const infraStructure = `S3 bucket${props.webApp ? ' + Cloudfront' : ''};`;
  return `Once run, it will create ${count} ${infraStructure} in ${props.region}, configured ${useCaseText}.`;
};
const getAuthDescription = ({ staging }: TerraformProps): string => {
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
}: TerraformProps): string => {
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
