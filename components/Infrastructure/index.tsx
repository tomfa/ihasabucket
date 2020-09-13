import { useEffect, useState } from 'react';
import Description from '../forms/Description.style';
import Header from '../Header.style';
import { Section } from '../utils';
import { getTerraFormPackage } from './utils';
import Pre from './Pre.style';
import List from './List.style';
import ListItem from './ListItem.style';
import Mute from './Mute.style';
import LoadingIcon from './LoadingIcon';

type Props = {
  webApp: boolean;
  staging: boolean;
  shared: boolean;
  staticPage: boolean;
};

const Infrastructure = (props: Props) => {
  const { url, description } = getTerraFormPackage(props);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }, [url]);
  if (loading) {
    return (
      <Section>
        <Header as={'h1'}>Create infrastructure</Header>
        <LoadingIcon />
      </Section>
    );
  }
  return (
    <Section>
      <Header as={'h1'}>Create infrastructure</Header>
      If you can has a bucket? Of course you can, my chubby friend ❤️ Just run
      the script below!
      <Pre>
        terraform apply \{'\n    '}
        {url}
      </Pre>
      <Description>
        The script above will ask you for your AWS keys and desired AWS region.
      </Description>
      <Description>{description}</Description>
      <h4>Prerequisites</h4>
      <List>
        <ListItem>
          If you don&apos;t have an AWS account already, sign up at{' '}
          <a href="https://portal.aws.amazon.com/billing/signup#/start">
            aws.amazon.com
          </a>
        </ListItem>
        <ListItem>
          If you don&apos;t have your <strong>AWS_SECRET_ACCESS_KEY</strong> and{' '}
          <strong>AWS_ACCESS_KEY_ID</strong> handy, find those in the top right
          corner under your name &gt; Security credentials.
        </ListItem>
        <ListItem>
          If you haven&apos;t already,{' '}
          <a href="https://learn.hashicorp.com/tutorials/terraform/install-cli">
            install Terraform
          </a>
          {`\n`}
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
        </ListItem>
      </List>
    </Section>
  );
};

export default Infrastructure;
