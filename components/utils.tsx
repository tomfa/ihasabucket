import styled from 'styled-components';

export const SectionBackground = styled.div`
  width: 100%;
  background-color: ${(props) =>
    (props.backgroundColor !== undefined && props.backgroundColor) ||
    props.theme.colors.bgPrimary};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.marginTop};
  position: relative;
  overflow: hidden;
`;

export const Section = styled.section`
  max-width: ${(p) => p.theme.layout.maxWidth}px;
  width: 100vw;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;

  @media (min-width: 375px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const Colored = styled.span`
  color: ${(p) =>
    p.secondary ? p.theme.colors.secondary : p.color || p.theme.colors.primary};
`;

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
