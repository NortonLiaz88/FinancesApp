import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
