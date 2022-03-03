import { FC, ReactNode } from 'react';
import { MyBtn } from './MyButtonStyle';

type BtnType = 'button' | 'submit' | 'reset';

interface MyButtonProps {
  children?: ReactNode;
  type?: BtnType;
  handleClick?: () => void;
  isLink?: boolean;
}

export const MyButton: FC<MyButtonProps> = ({
  children,
  type = 'button',
  isLink = false,
  handleClick,
}): JSX.Element => {
  return (
    <MyBtn $link={isLink} type={type} onClick={handleClick}>
      {children}
    </MyBtn>
  );
};
