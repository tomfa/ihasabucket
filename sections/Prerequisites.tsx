import Description from '../components/forms/Description.style';
import Header from '../components/Header.style';
import Pre from '../components/code/Pre.style';
import Mute from '../components/Mute.style';
import useQuestions from '../questions/useQuestions';
import { Section } from '../components/utils';
import Code from '../components/code/Code';

const Prerequisites = () => {
  const { hasAnsweredAll } = useQuestions();
  if (!hasAnsweredAll) {
    return null;
  }
  return (
    <Section tight>
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
      <Code
        lines={[
          `# For Macs with homebrew`,
          `brew install hashicorp/tap/terraform`,
        ]}
      />
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

export default Prerequisites;
