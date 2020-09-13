import styled from 'styled-components';

export const SectionBackground = styled.div`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

export const Section = styled.section`
  max-width: ${(p) => p.theme.layout.maxWidth}px;
  width: 100vw;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 350px) {
    padding: 1rem;
  }
`;

export const Main = styled(Section)``;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const Colored = styled.span`
  color: ${(p) => p.color || p.theme.colors.primary};
`;
