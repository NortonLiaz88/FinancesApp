import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const ExpenseWrapper = styled.ScrollView`
  flex: 1;
  padding: ${hp(2)}px ${wp(3)}px;
  padding-bottom: ${hp(5)}px;
`;

export const VerticalDivider = styled.View`
  height: ${hp(2)}px;
`;

export const InputWrapper = styled.View`
  margin-top: ${hp(10)}px;
`;

export const CategoriesWrapper = styled.View`
  margin-top: ${hp(5)}px;
  margin-bottom: ${hp(5)}px;

`;

export const CategoriesDescription = styled.Text`
  color: ${({theme}) => theme.colors.endGradientColor};
  font-size: ${RFValue(12)}px;
  font-weight: bold;
`;

export const CategoriesContentWrapper = styled.View`
  margin-top: ${hp(2)}px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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

export const ButtonWrapper = styled.View`
  margin: ${hp(2)}px 0 ${hp(4)}px 0px;
`;