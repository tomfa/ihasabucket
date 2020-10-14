import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useEffect } from 'react';
import Meta from '../MetaTags/Meta';
import { Section, SectionBackground } from '../../components/utils';
import { useTheme } from '../../styles/theme';
import Title from '../../components/Title.style';
import { trail } from '../../utils/splitbee';

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
  const router = useRouter();
  useEffect(
    () =>
      trail('hi-there', {
        referrer: document?.referrer,
        isPrefilled: !!window?.location?.search,
      }),
    []
  );
  const refreshEverything = async () => {
    await router.push('/');

    // TODO: Clear state instead of reloading the entire app
    router.reload();
  };
  return (
    <SectionBackground
      backgroundColor={theme.colors.primary}
      color={theme.colors.textSecondary}>
      <Section>
        <Meta />
        <Title
          onClick={refreshEverything}
          role={'button'}
          style={{ cursor: 'pointer' }}>
          {title}
        </Title>
        <Lolrus src={'/bucket.png'} alt={'Lolrus, the bucket walrus'} />
      </Section>
    </SectionBackground>
  );
};

export default HeaderSection;
