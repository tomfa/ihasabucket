/* eslint-disable camelcase */

import { getCertificateTfContent } from './certificate';
import { getTerraPackageDescription } from './descriptionText';
import { getDomainRecordTfContent, getDomainTfContent } from './dns';
import { getFileStorageBucketTfContent } from './fileStorage';
import { getRedirectBucketTfContent } from './redirect';
import { TerraformProps, ModuleSpec, TerraformPackage } from './types';
import { getWebAppBucketTfContent } from './webApp';
import {
  getOutputLines,
  toModulesText,
  toVariablesText,
} from './terraformText';

const getMainTfContent = (props: TerraformProps): string[] => {
  const modules: ModuleSpec[] = [];
  modules.push(...getDomainTfContent(props));
  modules.push(...getDomainRecordTfContent(props));
  modules.push(...getCertificateTfContent(props));
  modules.push(...getWebAppBucketTfContent(props));
  modules.push(...getFileStorageBucketTfContent(props));
  modules.push(...getRedirectBucketTfContent(props));
  modules.push(...getCertificateTfContent(props));

  const lines: string[] = [];
  lines.push(...toVariablesText(modules));
  lines.push(...toModulesText(modules));
  lines.push(...getOutputLines(props));
  return lines;
};

export const getTerraFormPackage = (
  props: TerraformProps
): TerraformPackage => {
  return {
    mainTfContent: getMainTfContent(props),
    description: getTerraPackageDescription(props),
  };
};
