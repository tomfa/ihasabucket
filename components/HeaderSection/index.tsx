import styled from 'styled-components';
import Meta from '../MetaTags/Meta';
import { Section, SectionBackground } from '../utils';
import { useTheme } from '../../styles/theme';
import Link from '../Link';
import Title from './Title.style';

const Lolrus = styled.img`
  width: 150px;
  position: absolute;
  right: -30px;
  top: 0;

  @media (min-width: 560px) {
    display: block;
    right: 30px;
  }
`;

const HeaderSection = ({ title = 'I has a bucket.' }: { title?: string }) => {
  const theme = useTheme();
  return (
    <SectionBackground
      backgroundColor={theme.colors.primary}
      color={theme.colors.textSecondary}>
      <Section>
        <Meta />
        <Title>
          <Link href={'/'}>{title}</Link>
        </Title>
        <Lolrus src={'/bucket.png'} alt={'Lolrus, the bucket walrus'} />
      </Section>
    </SectionBackground>
  );
};

export default HeaderSection;
