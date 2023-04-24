import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIconSecondary from 'react-native-vector-icons/FontAwesome5';

export const CategoryWrapper = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.button};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: ${hp(2.5)}px ${wp(6)}px;
  margin-right: ${wp(2)}px;

  width: ${wp(20)}px;
`;

export const PrimaryIcon = styled(FontAwesomeIcon).attrs(({theme}) => ({
  size: 32,
  color: theme.colors.initialGradientColor,
}))``;

export const SecondaryIcon = styled(FontAwesomeIconSecondary).attrs(
  ({theme}) => ({
    size: 32,
    color: theme.colors.initialGradientColor,
  }),
)``;
