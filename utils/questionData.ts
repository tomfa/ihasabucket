import { Question } from '../types';
import { QUESTION_ID, BOOL_VALUE, VALUES, AWS_REGIONS } from '../enums';

const questionData: Question[] = [
  {
    id: QUESTION_ID.storageType,
    title: 'What are we storing?',
    type: 'radio',
    description:
      'Unlike normal file storage, webapps like React and Vue have a default path, and error pages.',
    options: [
      { value: 'webapp', label: 'A webapp' },
      { value: 'files', label: 'Static files or media uploads' },
    ],
  },
  {
    id: QUESTION_ID.webappIsStatic,
    title: 'Is the web app statically generated?',
    type: 'radio',
    description:
      'Statically generated sites can be optimized for search engines by returning correct HTTP status codes. If you are uncertain, select No.',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes (e.g. Next, Gatsby, Nuxt)' },
      { value: BOOL_VALUE.FALSE, label: 'No (e.g. plain Vue or React)' },
    ],
    showIf: [{ questionId: QUESTION_ID.storageType, value: 'webapp' }],
  },
  {
    id: QUESTION_ID.aclPublic,
    title: 'Should content be publicly available?',
    type: 'radio',
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
  },
  {
    id: QUESTION_ID.domainName,
    title: 'On what domain should this be served?',
    type: 'text',
    placeholder: 'mydomain.store',
    description: `We will use this as the S3 bucket name. If you don't want a URL now, just leave it blank.`,
  },
  {
    id: QUESTION_ID.configureDns,
    title: 'Should AWS handle DNS pointers?',
    type: 'radio',
    description:
      'We can map DNS pointers from AWS to the buckets automatically. Recommended for new domains, or if you are already using AWS Route 53 for your domain.',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes, please do' },
      {
        value: BOOL_VALUE.FALSE,
        label: 'No, I want to set up DNS myself',
      },
    ],
    showIf: [{ questionId: QUESTION_ID.domainName, value: VALUES.NOT_EMPTY }],
  },
  {
    id: QUESTION_ID.createCertificates,
    title: 'Should AWS create certificates to support the domain?',
    type: 'radio',
    description: 'AWS Certificates are free.',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Please do' },
      {
        value: BOOL_VALUE.FALSE,
        label: 'No, I`ll configure certificates myself',
      },
    ],
    showIf: [
      { questionId: QUESTION_ID.domainName, value: VALUES.NOT_EMPTY },
      { questionId: QUESTION_ID.configureDns, value: BOOL_VALUE.FALSE },
    ],
  },
  {
    id: QUESTION_ID.stagingEnv,
    title: 'Want a test environment?',
    type: 'radio',
    description:
      "A staging (or test) environment would mean a duplicate set of buckets. If you're uncertain, select No. You can always create a staging environment later.",
    options: [
      {
        value: BOOL_VALUE.TRUE,
        label: 'Yes, please create a separate set of buckets for testing',
      },
      { value: BOOL_VALUE.FALSE, label: "No, I won't need that" },
    ],
  },
  {
    id: QUESTION_ID.region,
    title: 'In what region do you want to host the buckets?',
    type: 'dropdown',
    defaultValue: AWS_REGIONS.EU_NORTH_1,
    description:
      "A staging (or test) environment would mean a duplicate set of buckets. If you're uncertain, select No. You can always create a staging environment later.",
    options: Object.entries(AWS_REGIONS).map(([value, label]) => ({
      value,
      label,
    })),
  },
];

export default questionData;
