import { Question } from '../types';
import { QUESTION_ID, BOOL_VALUE, VALUES, AWS_REGIONS } from '../enums';

const questionData: Question[] = [
  {
    id: QUESTION_ID.domainName,
    title: `What's our domain?`,
    type: 'text',
    placeholder: 'mydomain.store',
    description: `We will use this as the S3 bucket name. The bucket name is permanent, but it doesn't have to match an actual domain. It does however have to be unique on S3, so "example" or "my-bucket" will not work.`,
  },
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
    id: QUESTION_ID.configureDns,
    title: 'Should AWS set up DNS pointers?',
    type: 'radio',
    description:
      'Should we setup DNS pointers for your domain? (Recommended). Route 53 costs 1.5$ / month',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes, please do' },
      {
        value: BOOL_VALUE.FALSE,
        label: `No, I'll '`,
      },
    ],
    showIf: [{ questionId: QUESTION_ID.domainName, value: VALUES.NOT_EMPTY }],
  },
  {
    id: QUESTION_ID.createCertificates,
    title: 'Should AWS create certificates to support the domain?',
    type: 'radio',
    description:
      'AWS can create HTTPS certificates for us. This is recommended and free of charge.',
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
    id: QUESTION_ID.region,
    title: 'In what region do you want to host the buckets?',
    type: 'dropdown',
    defaultValue: AWS_REGIONS.EU_NORTH_1,
    description:
      'A region closer to your users can give an extra performance boost.',
    options: Object.entries(AWS_REGIONS).map(([value, label]) => ({
      value,
      label,
    })),
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
];

export default questionData;
