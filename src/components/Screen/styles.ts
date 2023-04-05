import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const PageWrapper = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 0 ${wp(3)}px
`;
