import { PageWrapper, Section } from '../components/utils';
import BlockQuote from '../components/BlockQuote';
import Footer from '../sections/Footer';
import Header from '../sections/HeaderSection';
import Button from '../components/Button';
import ArrowLeftIcon from '../components/icons/ArrowLeft';

export default function NotFound() {
  return (
    <PageWrapper>
      <Header />
      <Intro />
      <Footer />
    </PageWrapper>
  );
}

const Intro = ({ status = '400' }) => {
  const title =
    status === '400'
      ? '404: Can I has bucket '
      : status === '500'
      ? '500: Oh no, my bucket'
      : 'Hi there';
  return (
    <Section>
      <BlockQuote author={'Lolrus, the bucket walrus'}>{title}</BlockQuote>
      <Button url={'/'}>
        <ArrowLeftIcon color="white" /> Go home
      </Button>
    </Section>
  );
};
