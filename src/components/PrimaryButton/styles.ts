import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: 'Montserrat';
  text-align: center;
  font-weight: bold;
  line-height: ${RFValue(24)}px;
  margin: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.background};
  background-color: transparent;
  text-transform: uppercase;
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.endGradientColor};
  border-radius: 10px;

  ${props => props?.disabled && `background: ${props.theme.colors.text}`};
  ${props => props.disabled && 'opacity: 0.4;'};
`;
