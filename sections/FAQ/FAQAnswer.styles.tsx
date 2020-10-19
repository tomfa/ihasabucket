import styled from 'styled-components';

const FAQAnswer = styled.div`
  padding-left: 1rem;
  border-left: 2px solid grey;
  display: ${(p) => (p.open ? 'block' : 'none')};
`;

export default FAQAnswer;
