import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

export const Section = styled.section`
  max-width: 800px;
  width: 100vw;
  margin: 0 auto;
  padding: 2rem;
`;

export const Main = styled(Section)``;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
