import Meta from '../MetaTags/Meta';
import { Section, SectionWrapper } from '../utils';
import Title from './Title';

const Header = () => (
  <SectionWrapper backgroundColor="#111111" color="#fafafa">
    <Section>
      <Meta />
      <Title>I has a bucket.</Title>
    </Section>
  </SectionWrapper>
);

export default Header;
