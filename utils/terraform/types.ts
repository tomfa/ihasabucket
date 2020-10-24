export type QuestionSummary = {
  webApp: boolean;
  staging: boolean;
  shared: boolean;
  staticPage: boolean;
  bucketName: string;
  region: string;
  configureDns: boolean;
  createCertificates: boolean;
  forwardingBucket: string | null;
  errorPath: string | null;
};

type TerraformSection = {
  title?: string;
  description?: string;
  tfContent: string[];
};

export type TerraformPackage = {
  sections: TerraformSection[];
  footerText?: string[];
};

export type ModuleSpec = {
  name: string;
  source: string;
  parameters: {
    [key: string]: string;
  };
};

export type BucketProp = {
  redirect: string | null;
  main: string;
  staging: string | null;
};

// eslint-disable-next-line camelcase
export type Target = { target_name: string; target_zone_id: string };

export type BucketTargets = {
  redirect: Target | null;
  main: Target;
  staging: Target | null;
};

export type TerraformOutput = {
  value: string;
  label: string;
  description?: string;
};
