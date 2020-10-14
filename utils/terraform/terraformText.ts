import { BUCKET_TYPE, getInputDescription, INPUT } from '../../enums';
import { TerraformProps, ModuleSpec } from './types';

export const toVariablesText = (modules: ModuleSpec[]) => {
  const lines = [];
  const isUsed = (inputVariable: string): boolean =>
    !!modules.find(
      (m) =>
        !!Object.values(m.parameters).find((p) =>
          p.includes(`var.${inputVariable}`)
        )
    );
  Object.values(INPUT)
    .filter(isUsed)
    .forEach((input: INPUT) => {
      const description = getInputDescription(input);
      if (!description) {
        lines.push(`variable "${input}" {}`);
      } else {
        lines.push(`variable "${input}" {`);
        lines.push(`  description = "${description}"`);
        lines.push(`}`);
      }
    });
  lines.push('');
  return lines;
};

export const toModulesText = (modules: ModuleSpec[]) => {
  const lines = [];
  modules.forEach((module) => {
    lines.push(`module "${module.name}" {`);
    lines.push(`  source = "${module.source}"`);
    Object.entries(module.parameters).forEach(([key, value]) => {
      lines.push(`  ${key} = ${value}`);
    });
    lines.push(`}`);
    lines.push('');
  });
  return lines;
};

export const getOutputLines = (props: TerraformProps) => {
  const lines = [];
  getOutput({
    bucketType: props.webApp ? BUCKET_TYPE.WEBAPP : BUCKET_TYPE.FILE_STORAGE,
    hasStaging: props.staging,
  }).forEach((output) => {
    lines.push(`output "${output.label}" {`);
    lines.push(`  value = ${output.value}`);
    lines.push('}');
  });
  return lines;
};

const getOutput = ({
  bucketType,
  hasStaging,
}: {
  bucketType: BUCKET_TYPE;
  hasStaging: boolean;
}): { value: string; label: string }[] => {
  const outputs = [];
  const bucketNames = hasStaging
    ? [`${bucketType}-production`, `${bucketType}-staging`]
    : [bucketType];
  bucketNames.forEach((name) => {
    const stageName = hasStaging && name.split('-')[name.split('-').length - 1];
    const prefix = stageName ? `${stageName}-` : '';
    outputs.push({
      value: `module.${name}.AWS_SECRET_ACCESS_KEY`,
      label: `${prefix}AWS_SECRET_ACCESS_KEY`,
    });
    outputs.push({
      value: `module.${name}.AWS_ACCESS_KEY_ID`,
      label: `${prefix}AWS_ACCESS_KEY_ID`,
    });
    outputs.push({
      value: `module.${name}.BUCKET_NAME`,
      label: `${prefix}BUCKET_NAME`,
    });

    if (bucketType === BUCKET_TYPE.WEBAPP) {
      outputs.push({
        value: `module.${name}.CLOUDFRONT_URL`,
        label: `${prefix}CLOUDFRONT_URL`,
      });
    }
  });
  return outputs;
};
