module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    // Uses eslint-config-prettier to disable ESLint rules that would conflict with prettier
    'prettier/react',
    'prettier/@typescript-eslint',

    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // React's PropTypes are discouraged
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,

    // Only for styling/consistency, often with undesirable defaults.
    // Can be considered in individual repos.
    'react/jsx-curly-brace-presence': 0,
    'react/static-property-placement': 0,
    'react/destructuring-assignment': 0,
    'react/state-in-constructor': 0,

    // Does not support dynamic type prop, which we want.
    // ref https://github.com/yannickcr/eslint-plugin-react/issues/1555
    'react/button-has-type': 0,

    // Allow JSX in .js files
    'react/jsx-filename-extension': [0, { extensions: ['.jsx'] }],

    // Ordering of react component methods
    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],

    // Allows label-control connection being nested in DOM
    'jsx-a11y/label-has-associated-control': [2, { assert: 'either' }],

    'react/no-did-mount-set-state': [0],

    // Do not allow use of undefined variables
    'no-undef': 2,

    'no-underscore-dangle': 0,

    // Allow e.g. i++ in loops
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Do not require default exports
    'import/extensions': 0,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],

    // Prevent accidental console logs
    'no-console': 2,

    // Allow implicit return of value undefined in functions where values can also be returned
    'consistent-return': 0,

    // Disallow depending on libraries not inside package.json
    'import/no-extraneous-dependencies': [
      2,
      // For test files, allow libraries only to be specified in devDependencies
      { devDependencies: ['**/*.test.ts', '**/*.spec.ts'] },
    ],

    // The readability varies depending on the case. No need to enforce a rule.
    'prefer-template': 0,
    'prefer-destructuring': 0,
    'import/prefer-default-export': 0,

    // I can use spreading carefully, thank you :)
    'react/jsx-props-no-spreading': 0,

    // We use short-circuit and ternary function calls, though they can be less
    //   readable. Could be considered removed at a later stage.
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // Allow second parameter to be optional in parseInt
    radix: 0,

    // Prettier errors are expected to be fixed automatically. No need to also hint in IDE.
    'prettier/prettier': 0,
    'operator-linebreak': 0,

    // Next handles React in scope for us
    'react/react-in-jsx-scope': 0,

    // Extends javascript rule to include types and interfaces
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,

    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,

    // It should not be necessary to add two comments in TS-ignore cases
    '@typescript-eslint/ban-ts-comment': 0,

    // Using var x = require(...) is so uncommon, that it's on purpose when we do it
    '@typescript-eslint/no-var-requires': 0,

    // Sometimes you need empty functions to fulfill required parameters.
    '@typescript-eslint/no-empty-function': 0,

    // Needed to allow for ReturnType typedef.
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],

    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },

          '{}': {
            message:
              '{} allows a function to be called with any argument.\n' +
              '  - Consider removing the typing entirely.\n' +
              '  - If you explicitly want an empty object, use Record<never, never>.\n' +
              '  - If you want to allow anything (discouraged), use unknown.',
            fixWith: '',
          },
          'React.FC': {
            message:
              'You do not need to type the return type of a React component. ' +
              'React.FC is discouraged. See https://github.com/facebook/create-react-app/pull/8177',
          },
          FC: {
            message:
              'You do not need to type the return type of a React component. ' +
              'React.FC is discouraged. See https://github.com/facebook/create-react-app/pull/8177',
          },
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
