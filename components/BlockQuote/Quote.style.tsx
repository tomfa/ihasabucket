import styled from 'styled-components';

const QuoteStyle = styled.h2`
  font-family: ${(p) => p.theme.fonts.secondary};
  position: relative; /* for pseudos */
  font-size: 2rem;
  font-weight: normal;
  line-height: 1.1;
  margin: 0;
  border: 2px solid #fff;
  border: solid 2px;
  border-radius: 20px;
  padding: 25px;

  & > * {
    line-height: 1.1;
  }

  &:after {
    content: '';
    position: absolute;
    border: 2px solid;
    border-radius: 0 50px 0 0;
    width: 60px;
    height: 60px;
    bottom: -62px;
    left: 50px;
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }

  &:before {
    content: '';
    position: absolute;
    width: 80px;
    border: 6px solid ${(props) => props.theme.colors.bgPrimary};
    bottom: -3px;
    left: 50px;
    z-index: 2;
  }
`;

export default QuoteStyle;
