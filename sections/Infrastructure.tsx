/* eslint-disable react/no-array-index-key */

import { useEffect, useState } from 'react';
import Description from '../components/forms/Description.style';
import Header from '../components/Header.style';
import { getTerraFormPackage } from '../utils/terraform';
import Pre from '../components/code/Pre.style';
import Mute from '../components/Mute.style';
import LoadingIcon from '../components/icons/LoadingIcon';
import Code from '../components/code/Code';
import { ShareLink } from '../components/ShareLink';
import { TerraformProps } from '../utils/terraform/types';
import { trail } from '../utils/splitbee';
import useQuestions from '../questions/useQuestions';
import {
  getForwardingBucketValue,
  getNormalizedAnswer,
  hasAnswered,
} from '../questions/utils';
import { BOOL_VALUE, QUESTION_ID } from '../enums';
import { isDomain } from '../utils/domain';
import { Section } from '../components/utils';

const Infrastructure = () => {
  const questionData = useQuestions();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => trail('completed', props), []);
  useEffect(() => {
    if (questionData.hasAnsweredAll) {
      setTimeout(() => setLoading(false), 800);
    }
  }, [questionData.hasAnsweredAll]);
  if (!questionData.hasAnsweredAll) {
    return <Section id="infrastructure" />;
  }
  if (loading) {
    return (
      <Section id="infrastructure">
        <LoadingIcon />
      </Section>
    );
  }
  const props = getTerraformProps(questionData);
  const { description, mainTfContent } = getTerraFormPackage(props);

  return (
    <Section id="infrastructure">
      <Header as={'h1'}>Bucket is served!</Header>
      Just run the script below, or share this{' '}
      <ShareLink text={getShareTitle(props)}>configuration url</ShareLink> for
      later.
      <Code bucketName={props.bucketName} mainTfContent={mainTfContent} />
      <Description style={{ fontWeight: 'bold' }}>
        The script above will plan the infrastructure and prompt you for
        confirmation.
      </Description>
      {description.map((text, i) => (
        <Description key={i}>{text}</Description>
      ))}
      <Header>Prerequisites</Header>
      <h4>AWS Account</h4>
      <p>
        If you don&apos;t have an AWS account already, sign up at{' '}
        <a href="https://portal.aws.amazon.com/billing/signup#/start">
          aws.amazon.com
        </a>
      </p>
      <p>
        If you don&apos;t have your <strong>AWS_SECRET_ACCESS_KEY</strong> and{' '}
        <strong>AWS_ACCESS_KEY_ID</strong> handy, find those in the top right
        corner under your name &gt; Security credentials. They should be
        exported to your environment:
      </p>
      <Pre>
        <Mute># Export AWS keys{'\n'}</Mute>
        export AWS_SECRET_ACCESS_KEY=yaAS$1...{'\n'}
        export AWS_ACCESS_KEY_ID=AKIA...
      </Pre>
      <h4>Terraform installed</h4>
      <p>
        If you haven&apos;t already,{' '}
        <a href="https://learn.hashicorp.com/tutorials/terraform/install-cli">
          install Terraform
        </a>
      </p>
      <Pre>
        <Mute># For Macs with homebrew{'\n'}</Mute>
        brew install hashicorp/tap/terraform
      </Pre>
      <Description>
        See{' '}
        <a href="https://learn.hashicorp.com/tutorials/terraform/install-cli">
          learn.hashicorp.com/tutorials/terraform/install-cli
        </a>{' '}
        for other platforms.
      </Description>
    </Section>
  );
};

const getShareTitle = ({
  bucketName,
  webApp,
  region,
  shared,
}: TerraformProps): string | undefined => {
  const regionPostfix = region ? ` in ${region}` : '';
  if (bucketName && region) {
    return `Launch ${bucketName}${regionPostfix}`;
  }
  if (webApp && region) {
    return `Launch a web app ${regionPostfix}`;
  }
  if (!webApp && region) {
    const aclText = shared ? 'public' : 'private';
    return `Host ${aclText} files in ${regionPostfix}`;
  }
  return undefined;
};

const getTerraformProps = ({
  answers,
}: ReturnType<typeof useQuestions>): TerraformProps => ({
  webApp: hasAnswered(answers, QUESTION_ID.storageType, 'webapp'),
  shared: hasAnswered(answers, QUESTION_ID.aclPublic, BOOL_VALUE.TRUE),
  staging: hasAnswered(answers, QUESTION_ID.stagingEnv, BOOL_VALUE.TRUE),
  staticPage: hasAnswered(answers, QUESTION_ID.webappIsStatic, BOOL_VALUE.TRUE),
  createCertificates:
    isDomain(getNormalizedAnswer(answers, QUESTION_ID.bucketName)) &&
    (hasAnswered(answers, QUESTION_ID.configureDns, BOOL_VALUE.TRUE) ||
      hasAnswered(answers, QUESTION_ID.createCertificates, BOOL_VALUE.TRUE)),
  configureDns:
    isDomain(getNormalizedAnswer(answers, QUESTION_ID.bucketName)) &&
    hasAnswered(answers, QUESTION_ID.configureDns, BOOL_VALUE.TRUE),
  errorPath: getNormalizedAnswer(answers, QUESTION_ID.errorPath),
  forwardingBucket: getForwardingBucketValue(answers),
  bucketName: getNormalizedAnswer(answers, QUESTION_ID.bucketName),
  region: getNormalizedAnswer(answers, QUESTION_ID.region),
});

export default Infrastructure;
