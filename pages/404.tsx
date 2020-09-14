import { PageWrapper, Section } from '../components/utils';
import BlockQuote from '../components/BlockQuote';
import Footer from '../components/Footer';
import Header from '../components/HeaderSection';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <PageWrapper>
      <Header />
      <Intro />
      <Footer />
    </PageWrapper>
  );
}

const Intro = () => (
  <Section>
    <BlockQuote author={'Lolrus, the bucket walrus'}>
      Can I has bucket!?
    </BlockQuote>
    <p>404: This page does not exist.</p>
    <Button url={'/'}>Go home</Button>
  </Section>
);
