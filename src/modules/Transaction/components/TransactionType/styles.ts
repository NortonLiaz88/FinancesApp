import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Octicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const TransactionWrapper = styled.View`
  flex-direction: row;
  gap: ${hp(2)}px;
  margin: ${hp(2)}px 0;
`;

export const ArrowUpIcon = styled(Icon).attrs(({theme}) => ({
  size: 72,
  color: theme.colors.initialGradientColorSecondary,
  name: 'arrow-up',
}))`
  margin: 0 ${hp(2)}px;
`;

export const ArrowDownIcon = styled(Icon).attrs(({theme}) => ({
  size: 72,
  color: theme.colors.initialGradientColor,
  name: 'arrow-down',
}))`
  margin: 0 ${hp(2)}px;
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
