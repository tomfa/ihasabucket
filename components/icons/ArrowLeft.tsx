import styled from 'styled-components';

const Svg = styled.svg`
  display: inline;
  margin-left: 0.5rem;
  margin-right: 0.3rem;

  & polygon {
    fill: ${(p) => p.color || p.theme.colors.secondary};
  }
`;

const ArrowLeftIcon = ({
  size = 12,
  color,
}: {
  size?: number;
  color?: string;
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 200 200"
    color={color}>
    <polygon points="135.412,0 35.709,99.702 135.412,199.404 163.695,171.119 92.277,99.702 163.695,28.285 	" />
  </Svg>
);

export default ArrowLeftIcon;
