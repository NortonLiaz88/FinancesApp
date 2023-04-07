import styled from 'styled-components/native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const PageWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${hp(2)}px ${wp(3)}px
`;
