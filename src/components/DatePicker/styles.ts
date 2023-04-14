import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const InputWrapper = styled.View<Props>``;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

