import { AWS_REGIONS, BOOL_VALUE, QUESTION_ID } from '../enums';
import {
  DropdownQuestion,
  InputQuestion,
  Question,
  QuestionType,
  RadioQuestion,
} from '../types';
import {
  answerIsApexDomain,
  answerIsWWWDomain,
  answerIsDomain,
} from './conditions';

export const questions: Question[] = [
  {
    id: QUESTION_ID.bucketName,
    title: '',
    type: QuestionType.TEXT,
    placeholders: [
      'mydomain.com',
      'uploads.mydomain.com',
      'staging.mydomain.com',
      'www.mydomain.com',
      'test.mydomain.com',
      'uploads.mydomain.com',
    ],
    description: `We will use this as the S3 bucket name. The bucket name is permanent, but it doesn't have to match an actual domain. It does however have to be unique on S3, so "example" or "my-bucket" will not work. If you leave it empty, you'll be prompted for a bucket name at deploy time.`,
  } as InputQuestion,
  {
    id: QUESTION_ID.configureDns,
    title: 'Should we set up DNS pointers?',
    type: QuestionType.RADIO,
    description:
      'Should we setup DNS pointers and certificates for your domain? (Recommended). AWS Route 53 costs 0.5$ / month. If you select Yes, we will output the AWS DNS server urls after setting up the infrastructure. You must point to these servers from your registrar to enable them. If you select No, we will output AWS domain urls for the S3 bucket / Cloudfront, so you can set DNS up yourself.',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes, please do.' },
      {
        value: BOOL_VALUE.FALSE,
        label: `No, I'll handle DNS manually.`,
      },
    ],
    showIf: [{ questionId: QUESTION_ID.bucketName, value: answerIsDomain }],
  } as RadioQuestion,
  {
    id: QUESTION_ID.createCertificates,
    title: 'What about certificates (HTTPS)?',
    type: QuestionType.RADIO,
    description: `Even though we don't set up DNS in AWS, we can create certificates for the domain. This is free, but will require you to set up a DNS record manually to verify the domain ownership..`,
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes, please create one.' },
      {
        value: BOOL_VALUE.FALSE,
        label: `No thanks.`,
      },
    ],
    showIf: [{ questionId: QUESTION_ID.configureDns, value: BOOL_VALUE.FALSE }],
  } as RadioQuestion,
  {
    id: QUESTION_ID.apexForwarding,
    title: 'Forward apex to www?',
    type: QuestionType.RADIO,
    description:
      'It looks like your domain name is a www domain. (e.g. www.mydomain.com). Click Yes if you want to forward the apex domain (e.g. mydomain.com) to www (e.g. www.mydomain.com)',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes, forward my apex domain to www.' },
      {
        value: BOOL_VALUE.FALSE,
        label: `No thanks.`,
      },
    ],
    showIf: [
      {
        questionId: QUESTION_ID.bucketName,
        value: answerIsWWWDomain,
      },
      {
        questionId: QUESTION_ID.configureDns,
        value: BOOL_VALUE.TRUE,
      },
    ],
  } as RadioQuestion,
  {
    id: QUESTION_ID.wwwForwarding,
    title: 'Forward www to apex?',
    type: QuestionType.RADIO,
    description:
      'It looks like your domain name is an apex domain (e.g. mydomain.com). Click Yes if you want to forward the www domain (e.g. www.mydomain.com) to the apex domain.',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes, forward www to apex domain.' },
      {
        value: BOOL_VALUE.FALSE,
        label: `No thanks.`,
      },
    ],
    showIf: [
      {
        questionId: QUESTION_ID.bucketName,
        value: answerIsApexDomain,
      },
      {
        questionId: QUESTION_ID.configureDns,
        value: BOOL_VALUE.TRUE,
      },
    ],
  } as RadioQuestion,
  {
    id: QUESTION_ID.storageType,
    title: 'What are we storing?',
    type: QuestionType.RADIO,
    description:
      'Unlike normal file storage, web apps like React and Vue have a default path, and error pages.',
    options: [
      { value: 'webapp', label: 'A web app' },
      { value: 'files', label: 'Static files or media uploads' },
    ],
  } as RadioQuestion,
  {
    id: QUESTION_ID.webappIsStatic,
    title: 'Is the web app statically generated?',
    type: QuestionType.RADIO,
    description:
      'Statically generated sites can be optimized for search engines by returning correct HTTP status codes. If you are uncertain, select No.',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes (e.g. Next, Gatsby, Nuxt)' },
      { value: BOOL_VALUE.FALSE, label: 'No (e.g. plain Vue or React)' },
    ],
    showIf: [{ questionId: QUESTION_ID.storageType, value: 'webapp' }],
  } as RadioQuestion,
  {
    id: QUESTION_ID.aclPublic,
    title: 'Should content be publicly available?',
    type: QuestionType.RADIO,
    description:
      'If our files hold secret or personal information, we will need a stricter security policy than if we are storing publicly available files, e.g. media files for a CMS.',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes, make files public' },
      {
        value: BOOL_VALUE.FALSE,
        label: 'No, let me control access to the files',
      },
    ],
    showIf: [{ questionId: QUESTION_ID.storageType, value: 'files' }],
  } as RadioQuestion,
  {
    id: QUESTION_ID.region,
    title: 'In what region do you want the buckets?',
    type: QuestionType.DROPDOWN,
    defaultValue: AWS_REGIONS.EU_NORTH_1,
    description:
      'A region closer to your users can give an extra performance boost.',
    options: Object.values(AWS_REGIONS).map((value) => ({
      value,
      label: value,
    })),
  } as DropdownQuestion,
  {
    id: QUESTION_ID.stagingEnv,
    title: 'Want a test environment?',
    type: QuestionType.RADIO,
    description:
      "A staging (or test) environment would mean a duplicate set of buckets. If you're uncertain, select No. You can always create a staging environment later.",
    options: [
      {
        value: BOOL_VALUE.TRUE,
        label: 'Yes, please create a separate set of buckets for testing',
      },
      { value: BOOL_VALUE.FALSE, label: "No, I won't need that" },
    ],
  } as RadioQuestion,
];

export const questionMap = questions.reduce(
  (map, question) => ({ ...map, [question.id]: question }),
  {} as { [id in QUESTION_ID]: Question }
);
