import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const CongratulationWrapper = styled.View`
  padding: ${hp(2)}px ${wp(3)}px;
  flex: 1;
`;

export const ContentWrapper = styled.View`
  align-items: center;

  margin-top: ${hp(5)}px;
`;

export const VerticalDivider = styled.View`
  height: ${hp(2)}px;
`;

export const CongratsTitle = styled.Text`
  color: ${({theme}) => theme.colors.endGradientColor};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const CongratsMessage = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

export const TransactionContentWrapper = styled.View`
  margin-top: ${hp(5)}px;
  padding: ${hp(2)}px ${wp(3)}px;

`;

export const TransactionTagWrapper = styled.View``;

export const TransactionType = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

export const TransactionName = styled.Text`
  color: ${({theme}) => theme.colors.endGradientColor};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const TransactionDetailWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailSeparator = styled.View`
  height: ${hp(4)}px;
  width: ${wp(0.5)}px;
  background-color: ${({theme}) => theme.colors.initialGradientColor};
`;

export const TicketDivider =  styled.View`
  border-style: dotted;
  border-width: 1px;
  border-radius: 1;
  width: 100%;
`;