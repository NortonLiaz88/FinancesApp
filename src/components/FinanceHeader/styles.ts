import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Octicons';
import { RFValue } from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;


export const ButtonWrapper = styled.TouchableOpacity`
  height: ${hp(4.5)}px;
  width: ${wp(4.5)}px;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(Icon).attrs(({theme}) => ({
  color: theme.colors.textSecondary,
  size: 24,
  name: 'chevron-left',
}))`
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.endGradientColor};
    margin: 0 auto;
`;