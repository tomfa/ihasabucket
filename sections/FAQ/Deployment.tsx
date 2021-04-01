/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import { useState } from 'react';
import { QuestionSummary } from '../../utils/terraform/types';
import DropDown from '../../components/forms/Dropdown';
import { Option } from '../../types';
import Pre from '../../components/code/Pre.style';
import Code from '../../components/code/Code';

const local: Option = { value: 'local', label: 'Command line' };
const github: Option = { value: 'github', label: 'Github Actions' };
const circleCI: Option = { value: 'circleCI', label: 'Circle CI' };
const wercker: Option = { value: 'wercker', label: 'Oracle Wercker' };
const gitlab: Option = { value: 'gitlab', label: 'Gitlab CI' };

const deploymentOptions: Array<Option> = [
  local,
  github,
  gitlab,
  circleCI,
  wercker,
];

const Deployment = ({ summary }: { summary: QuestionSummary }) => {
  const [ci, setCi] = useState<Option>(github);
  return (
    <>
      <p>Depends where you want to deploy it from.</p>
      <DropDown
        id={'deployment'}
        options={deploymentOptions}
        selectedOption={ci}
        onChange={setCi}
        title={''}
      />
      {ci === local && <LocalDeployment summary={summary} />}
      {ci === wercker && <WerckerDeployment summary={summary} />}
      {ci === github && <GithubDeployment summary={summary} />}
      {ci === gitlab && <GitlabDeployment summary={summary} />}
      {ci === circleCI && <CircleCIDeployment summary={summary} />}
    </>
  );
};

const LocalDeployment = ({ summary }: { summary: QuestionSummary }) => (
  <>
    <p>
      1. Download and install the{' '}
      <a href="https://aws.amazon.com/cli/">AWS CLI</a>.
    </p>
    <p>2. Add the following to your package.json</p>
    <Pre>
      &quot;scripts&quot;: &#123;
      <br />
      {'  '}...
      <br />
      {'  '}&quot;deploy&quot;: &quot;aws s3 sync build/ s3://
      {summary.bucketName || 'my-beautiful-bucket'}&quot;
      <br />
      &#125;
      <br />
    </Pre>
    <p>
      This will sync the local folder build to s3. You might have to adjust that
      for your own setup.
    </p>
    <p>
      With the script above, you will be able to deploy to S3 using{' '}
      <code>yarn deploy</code> locally, given that you have your AWS credentials
      in the environment.
    </p>
  </>
);

const WerckerDeployment = ({ summary }: { summary: QuestionSummary }) => (
  <>
    <p>
      1. Add the following code to your <code>wercker.yml</code>
    </p>
    <Code
      lines={[
        `deploy_frontend:`,
        ``,
        `  steps:`,
        `    - script:`,
        `      name: install dependencies`,
        `      code: yarn`,
        `    - script:`,
        `      name: build frontend`,
        `      code: yarn build`,
        `    - s3sync:`,
        `      source_dir: build`,
        `      delete-removed: true`,
        `      key-id: $AWS_ACCESS_KEY_ID`,
        `      key-secret: $AWS_SECRET_ACCESS_KEY`,
        `      bucket-url: s3://$AWS_S3_BUCKET_NAME`,
        `    - script:`,
        `      name: invalidate cloudfront cache`,
        `      code: |`,
        `        if [[ -n "$AWS_CDN_DISTRIBUTION_ID" ]]; then`,
        `          sudo apt-get update`,
        `          sudo apt-get install unzip -y`,
        `          sudo apt-get install libpython-dev -y`,
        `          wget https://s3.amazonaws.com/aws-cli/awscli-bundle.zip`,
        `          unzip awscli-bundle.zip`,
        `          sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws`,
        `          rm -rf awscli-bundle*`,
        `          aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID`,
        `          aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY`,
        `          aws cloudfront create-invalidation --distribution-id $AWS_CDN_DISTRIBUTION_ID --paths "/*"`,
        `        fi`,
      ]}
    />
    <p>
      Set this pipeline up in{' '}
      <a href="https://app.wercker.com">app.wercker.com</a> with the required
      keys, and add a workflow to run it on master.
    </p>
  </>
);

const GithubDeployment = ({ summary }: { summary: QuestionSummary }) => {
  const lines = [
    `name: Production Build`,
    `on:`,
    `  pull_request:`,
    `  push:`,
    `    branches:`,
    `      - master`,
    ``,
    `jobs:`,
    `  build:`,
    `    runs-on: ubuntu-latest`,
    `    strategy:`,
    `      matrix:`,
    `        node-version: [13.x]`,
    `    steps:`,
    `    - uses: actions/checkout@v1`,
    `    - name: Use Node.js \${{ matrix.node-version }}`,
    `      uses: actions/setup-node@v1`,
    `      with:`,
    `        node-version: \${{ matrix.node-version }}`,
    `    - name: Yarn Install`,
    `      run: |`,
    `        yarn install`,
    `    - name: Production Build`,
    `      run: |`,
    `        yarn build`,
    `    - name: Deploy to S3`,
    `      uses: jakejarvis/s3-sync-action@master`,
    `      with:`,
    `        args: --acl public-read --delete`,
    `      env:`,
    `        AWS_S3_BUCKET: \${{ secrets.AWS_PRODUCTION_BUCKET_NAME }}`,
    `        AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}`,
    `        AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}`,
    `        AWS_REGION: "${summary.region}"`,
    `        SOURCE_DIR: "public"`,
    `    - name: Invalidate Cloudfront cache`,
    `      uses: awact/cloudfront-action@master`,
    `      env:`,
    `        SOURCE_PATH: '/*'`,
    `        AWS_REGION: "${summary.region}"`,
    `        AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID}}`,
    `        AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}`,
    `        DISTRIBUTION_ID: \${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}`,
  ];
  return (
    <>
      <p>
        1. Add the following file to your repo:{' '}
        <code>.github/workflows/main.yml</code>
      </p>
      <Code lines={lines} />
      <p>Set this up in the Actions tab in your Github repo.</p>
    </>
  );
};

export const GitlabDeployment = ({ summary }: { summary: QuestionSummary }) => (
  <>
    <p>
      See{' '}
      <a href="https://hackernoon.com/using-gitlab-ci-cd-to-auto-deploy-your-vue-js-application-to-aws-s3-9affe1eb3457">
        this article
      </a>{' '}
      for some hints.
    </p>
    <Pre>
      deploy prod:
      <br /> image: python:latest
      <br /> stage: deploy
      <br /> only:
      <br />
      {'   '}- tags
      <br /> script:
      <br />
      {'   '}- pip install awscli
      <br />
      {'   '}- aws s3 sync ./dist s3://YOUR_BUCKET_NAME
    </Pre>
  </>
);

export const CircleCIDeployment = ({
  summary,
}: {
  summary: QuestionSummary;
}) => (
  <p>
    See{' '}
    <a href="https://circleci.com/developer/orbs/orb/circleci/aws-s3#commands-sync">
      CircleCI S3 Orbs
    </a>
  </p>
);

export default Deployment;
