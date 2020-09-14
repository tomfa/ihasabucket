import Meta from '../MetaTags/Meta';
import { Section, SectionBackground } from '../utils';
import { useTheme } from '../../styles/theme';
import Title from './Title.style';

const HeaderSection = ({ title = 'I has a bucket.' }: { title?: string }) => {
  const theme = useTheme();
  return (
    <SectionBackground
      backgroundColor={theme.colors.primary}
      color={theme.colors.textSecondary}>
      <Section>
        <Meta />
        <Title>{title}</Title>
      </Section>
    </SectionBackground>
  );
};

export default HeaderSection;
