import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Montserrat';
  color: ${({theme}) => theme.colors.endGradientColor};
  text-align: center;
`;


export const CustomButton = styled.TouchableOpacity`
  flex: 1;
  width: 100%;

  border-width: 2px;
  border-color: ${({theme}) => theme.colors.endGradientColor};
  border-radius: 10px;
  ${props => props?.disabled && `background: ${props.theme.colors.text}`};
  ${props => props.disabled && 'opacity: 0.4;'};

  align-items: center;
  justify-content: center;
`;
