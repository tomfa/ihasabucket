/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import { useState } from 'react';
import { QuestionSummary } from '../../utils/terraform/types';
import DropDown from '../../components/forms/Dropdown';
import { Option } from '../../types';
import Pre from '../../components/code/Pre.style';

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
    <Pre>
      deploy_frontend:
      <br />
      {'  '}steps:
      <br />
      {'    '}- script:
      <br />
      {'      '}name: install dependencies
      <br />
      {'      '}code: yarn
      <br />
      {'    '}- script:
      <br />
      {'      '}name: build frontend
      <br />
      {'      '}code: npm run build
      <br />
      {'    '}- s3sync:
      <br />
      {'      '}source_dir: build
      <br />
      {'      '}delete-removed: true
      <br />
      {'      '}key-id: $AWS_ACCESS_KEY_ID
      <br />
      {'      '}key-secret: $AWS_SECRET_ACCESS_KEY
      <br />
      {'      '}bucket-url: s3://$AWS_S3_BUCKET_NAME
      <br />
      {'    '}- script:
      <br />
      {'      '}name: invalidate cloudfront cache
      <br />
      {'      '}code: |
      <br />
      {'        '}if [[ -n &quot;$AWS_CDN_DISTRIBUTION_ID&quot; ]]; then
      <br />
      {'          '}sudo apt-get update
      <br />
      {'          '}sudo apt-get install unzip -y
      <br />
      {'          '}sudo apt-get install libpython-dev -y
      <br />
      {'          '}wget https://s3.amazonaws.com/aws-cli/awscli-bundle.zip
      <br />
      {'          '}unzip awscli-bundle.zip
      <br />
      {'          '}sudo ./awscli-bundle/install -i /usr/local/aws -b
      /usr/local/bin/aws
      <br />
      {'          '}rm -rf awscli-bundle*
      <br />
      {'          '}aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
      <br />
      {'          '}aws configure set aws_secret_access_key
      $AWS_SECRET_ACCESS_KEY
      <br />
      {'          '}aws cloudfront create-invalidation --distribution-id
      $AWS_CDN_DISTRIBUTION_ID --paths &quot;/&#42;&quot;
      <br />
      {'        '}fi
    </Pre>
    <p>
      Set this pipeline up in{' '}
      <a href="https://app.wercker.com">app.wercker.com</a> with the required
      keys, and add a workflow to run it on master.
    </p>
  </>
);

const GithubDeployment = ({ summary }: { summary: QuestionSummary }) => (
  <>
    <p>
      1. Add the following file to your repo:{' '}
      <code>.github/workflows/main.yml</code>
    </p>
    <Pre>
      name: Production Build
      <br />
      on:
      <br />
      {'  '}pull_request:
      <br />
      {'  '}push:
      <br />
      {'    '}branches:
      <br />
      {'      '}- master
      <br />
      jobs:
      <br />
      {'  '}build:
      <br />
      {'    '}runs-on: ubuntu-latest
      <br />
      <br />
      {'    '}strategy:
      <br />
      {'      '}matrix:
      <br />
      {'        '}node-version: [13.x]
      <br />
      <br />
      {'    '}steps:
      <br />
      {'    '}- uses: actions/checkout@v1
      <br />
      {'    '}- name: Use Node.js $&#123;&#123; matrix.node-version &#125;&#125;
      <br />
      {'      '}uses: actions/setup-node@v1
      <br />
      {'      '}with:
      <br />
      {'        '}node-version: $&#123;&#123; matrix.node-version &#125;&#125;
      <br />
      {'    '}- name: Yarn Install
      <br />
      {'      '}run: |
      <br />
      {'        '}yarn install
      <br />
      {'    '}- name: Production Build
      <br />
      {'      '}run: |
      <br />
      {'        '}yarn build
      <br />
      {'    '}- name: Deploy to S3
      <br />
      {'      '}uses: jakejarvis/s3-sync-action@master
      <br />
      {'      '}with:
      <br />
      {'        '}args: --acl public-read --delete
      <br />
      {'      '}env:
      <br />
      {'        '}AWS_S3_BUCKET: $&#123;&#123;
      secrets.AWS_PRODUCTION_BUCKET_NAME &#125;&#125;
      <br />
      {'        '}AWS_ACCESS_KEY_ID: $&#123;&#123; secrets.AWS_ACCESS_KEY_ID
      &#125;&#125;
      <br />
      {'        '}AWS_SECRET_ACCESS_KEY: $&#123;&#123;
      secrets.AWS_SECRET_ACCESS_KEY &#125;&#125;
      <br />
      {'        '}AWS_REGION: &quot;{summary.region}&quot;
      <br />
      {'        '}SOURCE_DIR: &quot;public&quot;
      {'    '}- name: Invalidate Cloudfront cache
      {'      '}uses: awact/cloudfront-action@master
      {'      '}env:
      {'        '}SOURCE_PATH: &apos;/*&apos;
      {'        '}AWS_REGION: &quot;eu-north-1&quot;
      {'        '}AWS_ACCESS_KEY_ID: $&#123;&#123; secrets.AWS_ACCESS_KEY_ID
      &#125;&#125;
      {'        '}AWS_SECRET_ACCESS_KEY: $&#123;&#123;
      secrets.AWS_SECRET_ACCESS_KEY &#125;&#125;
      {'        '}DISTRIBUTION_ID: $&#123;&#123;
      secrets.CLOUDFRONT_DISTRIBUTION_ID &#125;&#125;
    </Pre>
    <p>Set this up in the Actions tab in your Github repo.</p>
  </>
);

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
