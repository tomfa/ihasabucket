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

const Infrastructure = (props: TerraformProps) => {
  const { description, mainTfContent } = getTerraFormPackage(props);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, [mainTfContent]);
  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <>
      <Header as={'h1'}>Bucket is served!</Header>
      Just run the script below, or share this{' '}
      <ShareLink text={getShareTitle(props)}>configuration url</ShareLink> for
      later.
      <Code bucketName={props.bucketName} mainTfContent={mainTfContent} />
      <Description style={{ fontWeight: 'bold' }}>
        The script above will plan the infrastructure and prompt you for
        confirmation.
      </Description>
      {description.map((text) => (
        <Description>{text}</Description>
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
    </>
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

export default Infrastructure;
