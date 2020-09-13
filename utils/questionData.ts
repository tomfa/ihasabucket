import { Question } from '../types';
import { QUESTION_ID, BOOL_VALUE } from '../enums';

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
    title: 'Is the webapp statically generated?',
    type: 'radio',
    defaultValue: 'no',
    description:
      'Statically generated sites can be optimized for search engines by returning correct HTTP status codes. If you are uncertain, select No.',
    options: [
      { value: BOOL_VALUE.TRUE, label: 'Yes (e.g. Next, Gatsby, Nuxt)' },
      { value: BOOL_VALUE.FALSE, label: 'No (e.g. Vue or React)' },
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
