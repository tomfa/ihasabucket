import styled from 'styled-components';
import Header from '../../components/Header.style';

const FooterHeader = styled(Header)`
  color: ${(p) => p.theme.colors.textSecondary};
  flex: 1;
  font-size: 1.3rem;
`;

export default FooterHeader;
