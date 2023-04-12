import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from 'react-native-vector-icons/Octicons';
import { RFValue } from "react-native-responsive-fontsize";

export const CardWrapper = styled.TouchableOpacity`
    padding: ${hp(2.5)}px ${wp(8)}px;
    background: ${({theme}) => theme.colors.card};
    align-items: center;
    width: 45%;
    border-radius: 24px;
`;

export const ArrowUpIcon = styled(Icon).attrs(({theme}) => ({
    size: 72,
    color: theme.colors.initialGradientColorSecondary,
    name: 'arrow-up'
}))``;

export const ArrowDownIcon = styled(Icon).attrs(({theme}) => ({
    size: 72,
    color: theme.colors.initialGradientColor,
    name: 'arrow-down'
}))``;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.endGradientColor};
    font-size: ${RFValue(16)}px;
`;

export const AmountText = styled.Text`
    margin-top:  ${hp(2.5)}px;
    font-size: ${RFValue(18)}px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.textSecondary};
`;