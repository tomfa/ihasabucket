export enum QUESTION_ID {
  storageType = 'storage-type',
  webappType = 'webapp-type',
  acl = 'acl',
  stagingEnv = 'staging-env',
}

export enum BOOL_VALUE {
  FALSE = 'false',
  TRUE = 'true',
}

export type Option = {
  value: string;
  label: string;
};

export type QuestionDisplayCondition = {
  questionId: QUESTION_ID,
  value: string,
}

export type Question = {
  id: QUESTION_ID;
  title: string;
  type: 'radio' | 'checkbox';
  defaultValue?: string | number | string[] | number[];
  description?: string;
  showIf?: QuestionDisplayCondition[],
  options: Option[];
};
