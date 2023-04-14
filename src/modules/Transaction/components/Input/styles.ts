import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const InputWrapper = styled.View<Props>`
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

export const InputText = styled.TextInput<Props>`
  border-bottom-width: 2px;
  border-bottom-color: ${({theme}) => theme.colors.endGradientColor};
  ${({isFocused, theme}) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.endGradientColor};
    `}
`;
