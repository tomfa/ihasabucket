import { Main, PageWrapper } from '../components/utils';
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
            {' '}
            <span style={{ color: 'red' }}>webapp</span>
            {' '}
            or need a
            place to store files? Put them in S3 buckets. It&apos;s
            {' '}
            <span style={{ color: 'red' }}>cheap</span>
            {' '}
            and
            {' '}
            <span style={{ color: 'red' }}>reliable</span>
            . Let me show how
            {' '}
            <span style={{ color: 'red' }}>easy</span>
            {' '}
            it is.
          </>
        </BlockQuote>
      </Main>
    </PageWrapper>
  );
}
