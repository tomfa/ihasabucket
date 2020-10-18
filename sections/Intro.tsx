import { Colored, Section } from '../components/utils';
import BlockQuote from '../components/BlockQuote';

const Intro = () => (
  <Section>
    <BlockQuote author={'Lolrus, the bucket walrus'}>
      <>
        Hosting a <Colored secondary> web app </Colored>
        or need to store uploads? Put them in S3 buckets. It&apos;s
        <Colored secondary> cheap </Colored>
        and
        <Colored secondary> reliable</Colored>. With CloudFront, it&apos;ll be
        blazingly <Colored secondary>fast</Colored>.
      </>
    </BlockQuote>
  </Section>
);

export default Intro;
