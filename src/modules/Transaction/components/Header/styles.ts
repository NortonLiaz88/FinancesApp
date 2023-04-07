import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Octicons';

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BackButton = styled(Icon).attrs(({theme}) => ({
  color: theme.colors.textSecondary,
  size: 24,
  name: 'chevron-left',
}))``;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.endGradientColor};
    margin: 0 auto;
`;