import { BUCKET_TYPE, getInputDescription, INPUT } from '../../enums';
import { ModuleSpec, TerraformOutput, TerraformProps } from './types';
import { getBucketModuleNames } from './names';

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
  const bucketModuleNames = getBucketModuleNames(props);
  const bucketType = props.webApp
    ? BUCKET_TYPE.WEBAPP
    : BUCKET_TYPE.FILE_STORAGE;

  const outputs = getOutput({
    moduleName: bucketModuleNames.main,
    bucketType,
    prefix: props.staging ? 'production-' : '',
  });
  if (props.staging) {
    outputs.push(
      ...getOutput({
        moduleName: bucketModuleNames.staging,
        bucketType,
        prefix: 'staging-',
      })
    );
  }
  outputs.forEach((output) => lines.push(...outputAsText(output)));

  return lines;
};

const getOutput = ({
  bucketType,
  moduleName,
  prefix = '',
}: {
  bucketType: BUCKET_TYPE;
  moduleName: string;
  prefix?: string;
}): TerraformOutput[] => {
  const outputs = [];
  outputs.push({
    value: `module.${moduleName}.AWS_SECRET_ACCESS_KEY`,
    label: `${prefix}AWS_SECRET_ACCESS_KEY`,
  });
  outputs.push({
    value: `module.${moduleName}.AWS_ACCESS_KEY_ID`,
    label: `${prefix}AWS_ACCESS_KEY_ID`,
  });
  outputs.push({
    value: `module.${moduleName}.BUCKET_NAME`,
    label: `${prefix}BUCKET_NAME`,
  });

  if (bucketType === BUCKET_TYPE.WEBAPP) {
    outputs.push({
      value: `module.${moduleName}.CLOUDFRONT_URL`,
      label: `${prefix}CLOUDFRONT_URL`,
    });
  }
  return outputs;
};

const outputAsText = (output: TerraformOutput): string[] => {
  const lines = [];
  lines.push(`output "${output.label}" {`);
  lines.push(`  value = ${output.value}`);
  if (output.description) {
    lines.push(`  description = ${output.description}`);
  }
  lines.push('}');
  return lines;
};
