import { PageWrapper } from '../components/utils';
import Header from '../sections/HeaderSection';
import Footer from '../sections/Footer';
import Intro from '../sections/Intro';
import Questionare from '../sections/Questionare';
import { QuestionProvider } from '../questions/useQuestions';
import Infrastructure from '../sections/Infrastructure';
import Prerequisites from '../sections/Prerequisites';

export default function Home() {
  return (
    <PageWrapper>
      <QuestionProvider>
        <Header />
        <Intro />
        <Questionare />
        <Infrastructure />
        <Prerequisites />
        <Footer />
      </QuestionProvider>
    </PageWrapper>
  );
}
