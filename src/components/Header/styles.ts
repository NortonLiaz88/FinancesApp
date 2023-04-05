import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const Wrapper = styled.View`
  margin-top: ${hp(3.6)}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.textSecondary};
`;
