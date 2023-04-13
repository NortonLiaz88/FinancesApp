import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const PayeeWrapper = styled.View`
  flex-direction: row;
  margin-top:  ${hp(2)}px;
`;

export const MessageWrapper = styled.View`
  flex-direction: column;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.endGradientColor};
  font-size: ${RFValue(16)}px;
`;
