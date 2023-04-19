import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const ExpenseDescriptionWrapper = styled.View`
  padding: ${hp(2)}px ${wp(3)}px;
  flex: 1;
`;

export const VerticalDivider = styled.View`
  height: ${hp(2)}px;
`;

export const InputWrapper = styled.View`
  margin-top: ${hp(10)}px;
`;

export const ButtonWrapper = styled.View`
  margin-top: auto;
`;

export const CurrentCategoryWrapper = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoryWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${hp(2)}px;
`;

export const CategoryName = styled.Text`
  color: ${({theme}) => theme.colors.endGradientColor};
  font-size: ${RFValue(12)}px;
`;
