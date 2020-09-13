import { Colored, Main, PageWrapper } from '../components/utils';
import Header from '../components/Header';
import BlockQuote from '../components/BlockQuote';

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <Main>
        <BlockQuote
          author={'Lolrus, the bucket walrus'}
          source={'At the launch of AWS S3 in 2006'}
        >
          <>
            Hosting a
            <Colored> webapp </Colored>
            or need to store uploads? Put them in S3 buckets. It&apos;s
            <Colored> cheap </Colored>
            and
            <Colored> reliable</Colored>
            . Let me show how
            <Colored> easy </Colored>
            it is.
          </>
        </BlockQuote>
      </Main>
    </PageWrapper>
  );
}
