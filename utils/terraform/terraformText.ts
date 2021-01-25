import { getInputDescription, INPUT } from '../../enums';
import { ModuleSpec, TerraformOutput, QuestionSummary } from './types';
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

export const getOutputLines = (props: QuestionSummary) => {
  const lines = [];
  const bucketModuleNames = getBucketModuleNames(props);

  const outputs = getOutput({
    ...props,
    moduleName: bucketModuleNames.main,
    prefix: props.staging ? 'production-' : '',
  });
  if (props.staging) {
    outputs.push(
      ...getOutput({
        ...props,
        moduleName: bucketModuleNames.staging,
        prefix: 'staging-',
      })
    );
  }
  if (props.configureDns) {
    outputs.push({
      value: `module.domain.DNS_SERVERS`,
      label: `DNS_SERVERS`,
      description:
        '"Set your DNS pointers to these values with your existing registrar."',
    });
  } else if (props.createCertificates) {
    outputs.push({
      value: `module.certificate.CERTIFICATE_DNS_VALIDATION_POINTERS`,
      label: `CERTIFICATE_DNS_VALIDATION_POINTERS`,
      description:
        '"Add CNAME pointers to these values from your existing DNS to validate the certificate."',
    });
  }
  outputs.push(
    {
      value: `module.user.AWS_ACCESS_KEY_ID`,
      label: `AWS_ACCESS_KEY_ID`,
      description:
        '"Use this key for CI to configure automatic deploys. It will only have access to these new resources."',
    },
    {
      value: `module.user.AWS_SECRET_ACCESS_KEY`,
      label: `AWS_SECRET_ACCESS_KEY`,
      description: '"Use secret key for CI to configure automatic deploys."',
    }
  );
  outputs.forEach((output) => lines.push(...outputAsText(output)));

  return lines;
};

interface OutputProps extends QuestionSummary {
  moduleName: string;
  prefix?: string;
}
const getOutput = ({
  webApp,
  configureDns,
  moduleName,
  prefix = '',
}: OutputProps): TerraformOutput[] => {
  const outputs = [];

  outputs.push({
    value: `module.${moduleName}.BUCKET_NAME`,
    label: `${prefix}BUCKET_NAME`,
    description: '"Use this to configure CI for automatic deployment"',
  });

  if (webApp) {
    if (!configureDns) {
      outputs.push({
        value: `module.${moduleName}.CLOUDFRONT_URL`,
        label: `${prefix}CLOUDFRONT_URL`,
        description: '"Your webapp will be available at this URL."',
      });
    }
    outputs.push({
      value: `module.${moduleName}.CLOUDFRONT_DISTRIBUTION_ID`,
      label: `${prefix}CLOUDFRONT_DISTRIBUTION_ID`,
      description: '"Use this to configure CI for automatic deployment"',
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
