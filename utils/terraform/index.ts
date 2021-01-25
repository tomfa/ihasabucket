/* eslint-disable camelcase */

import { getCertificateTfContent } from './certificate';
import { getTerraPackageDescription } from './descriptionText';
import { getDomainRecordTfContent, getDomainTfContent } from './dns';
import { getFileStorageBucketTfContent } from './fileStorage';
import { getRedirectBucketTfContent } from './redirect';
import { QuestionSummary, ModuleSpec, TerraformPackage } from './types';
import { getWebAppBucketTfContent } from './webApp';
import {
  getOutputLines,
  toModulesText,
  toVariablesText,
} from './terraformText';
import { getIAMUserTfContent } from './iamUser';

const getMainTfContent = (props: QuestionSummary): string[] => {
  const modules: ModuleSpec[] = [];
  modules.push(...getWebAppBucketTfContent(props));
  modules.push(...getFileStorageBucketTfContent(props));
  modules.push(...getDomainTfContent(props));
  modules.push(...getDomainRecordTfContent(props));
  modules.push(...getCertificateTfContent(props));
  modules.push(...getRedirectBucketTfContent(props));
  modules.push(...getIAMUserTfContent(props));

  const lines: string[] = [];
  lines.push(...toVariablesText(modules));
  lines.push(...toModulesText(modules));
  lines.push(...getOutputLines(props));
  return lines;
};

export const getTerraFormPackage = (
  props: QuestionSummary
): TerraformPackage => {
  const createFolders = {
    title: 'First, create a folder for your infrastructure code.',
    tfContent: ['mkdir infrastructure', 'cd infrastructure'],
  };
  const mainContent = {
    title: 'Then, create a terraform config file',
    tfContent: [
      `cat <<EOT >> ${props.bucketName || 'main'}.tf`,
      ...getMainTfContent(props),
      'EOT',
    ],
  };
  if (!props.configureDns) {
    return {
      sections: [
        createFolders,
        mainContent,
        {
          title: 'Initialize the modules and deploy to AWS',
          tfContent: ['terraform init', 'terraform apply'],
        },
      ].filter((m) => m),
      footerText: getTerraPackageDescription(props),
    };
  }
  const initialDnsDeploy = {
    title: 'Download the required modules, then create the DNS servers',
    tfContent: ['terraform init', 'terraform apply -target=module.domain'],
  };
  const deploy = {
    title: 'Deploy the remaining infrastructure to AWS',
    tfContent: ['terraform apply'],
  };
  return {
    sections: [createFolders, mainContent, initialDnsDeploy, deploy],
    footerText: getTerraPackageDescription(props),
  };
};
