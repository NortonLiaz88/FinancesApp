import styled, {css} from 'styled-components/native';
import {TabTypes} from '.';

type ContainerTypes = Omit<TabTypes, "icon">

export const TabContainer = styled.View<ContainerTypes>`
  flex: 1;
  justify-content: center;

  ${props =>
    props.active &&
    css`
      border-top-color: #417d7a;
      border-top-width: 3px;
    `};
`;
