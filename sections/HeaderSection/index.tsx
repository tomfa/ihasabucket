import styled from 'styled-components';
import Meta from '../MetaTags/Meta';
import { Section, SectionBackground } from '../../components/utils';
import { useTheme } from '../../styles/theme';
import Link from '../../components/Link';
import Title from '../../components/Title.style';

const Lolrus = styled.img`
  width: 150px;
  position: absolute;
  right: -30px;
  top: 0;
  transition: transform 300ms;

  @media (min-width: 560px) {
    display: block;
    right: 30px;
  }

  &:hover {
    transform: translateY(30px);
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
