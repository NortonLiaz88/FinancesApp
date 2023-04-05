import React, {ReactNode} from 'react';
import {Title, Wrapper} from './styles';

type HeaderType = {
  children: ReactNode;
};

export const Header: React.FC<HeaderType> = ({children}: HeaderType) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
};
