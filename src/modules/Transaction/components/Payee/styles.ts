import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIconSecondary from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const PayeeWrapper = styled.View`
  flex-direction: row;
  margin-top:  ${hp(2)}px;
`;

export const CategoryWrapper = styled.View`
  background: ${({theme}) => theme.colors.button};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: ${hp(2.5)}px ${wp(6)}px;
  margin-right: ${wp(2)}px;
`;

export const PrimaryIcon = styled(FontAwesomeIcon).attrs(({theme}) => ({
  size: 32,
  color: theme.colors.initialGradientColor,
}))`
`;

export const SecondaryIcon = styled(FontAwesomeIconSecondary).attrs(
  ({theme}) => ({
    size: 32,
    color: theme.colors.initialGradientColor,
  }),
)`
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
