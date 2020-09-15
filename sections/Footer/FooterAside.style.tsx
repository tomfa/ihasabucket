import styled from 'styled-components';

const FooterAside = styled.aside`
  flex: 1;

  @media (min-width: 600px) {
    text-align: ${(props) => props.right && 'right'};
  }
`;

export default FooterAside;
