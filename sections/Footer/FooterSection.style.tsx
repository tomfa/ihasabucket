import styled from 'styled-components';
import { Section } from '../../components/utils';

const FooterSection = styled(Section)`
  display: flex;
  flex-direction: column;
  padding-top: 6rem;
  padding-bottom: 3rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export default FooterSection;
