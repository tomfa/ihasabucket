import { PageWrapper } from '../components/utils';
import Header from '../components/HeaderSection';
import Footer from '../components/Footer';
import Intro from '../sections/Intro';
import Questionare from '../sections/Questionare';

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <Intro />
      <Questionare />
      <Footer />
    </PageWrapper>
  );
}
