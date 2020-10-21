import { PageWrapper, Section } from '../components/utils';
import BlockQuote from '../components/BlockQuote';
import Footer from '../sections/Footer';
import Header from '../sections/HeaderSection';
import Button from '../components/Button';
import ArrowLeftIcon from '../components/icons/ArrowLeft';

export default function NotFound() {
  return (
    <PageWrapper><Header /><Intro /><Footer /></PageWrapper>
  );
}

const Intro = () => (
  <Section><BlockQuote author={'Lolrus, the bucket walrus'}>404: Can I has bucket!?</BlockQuote>
    <Button url={'/'}><ArrowLeftIcon color="white" /> Go home</Button>
  </Section>
);
