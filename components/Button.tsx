import { HTMLAttributes, ReactNode } from 'react';
import ButtonStyle from './Button.styles';
import Link from './Link';

type Props = {
  url?: string | null;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

const Button = ({ url = null, children, ...props }: Props) => {
  if (url) {
    return (
      <ButtonStyle link>
        <Link {...props} href={url}>
          {children}
        </Link>
      </ButtonStyle>
    );
  }
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
