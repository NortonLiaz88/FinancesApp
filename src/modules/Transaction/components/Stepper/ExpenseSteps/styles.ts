import styled from 'styled-components/native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const ExpenseWrapper = styled.View`
  flex: 1;
  padding: ${hp(2)}px ${wp(3)}px;
  /* margin-top: ${hp(2)}px; */
`;

export const VerticalDivider = styled.View`
  height: ${hp(2)}px;
`;