import Meta from '../MetaTags/Meta';
import { Section, SectionBackground } from '../utils';
import { useTheme } from '../../styles/theme';
import Title from './Title.style';

const Header = () => {
  const theme = useTheme();
  return (
    <SectionBackground
      backgroundColor={theme.colors.primary}
      color={theme.colors.textSecondary}
    >
      <Section>
        <Meta />
        <Title>I has a bucket.</Title>
      </Section>
    </SectionBackground>
  );
};

export default Header;
