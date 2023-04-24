import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Octicons';
import globalTheme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const BudgetCardWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${({theme}) => theme.colors.card};

    padding: ${hp(1.8)}px ${wp(2)}px;
    border-radius: 16px;
    margin-right: 16px;
    margin-top: 16px;
`;

export const DescriptionWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 64px;
`;

export const BudgetIconWrapper = styled.View`
    background: ${({theme}) => theme.colors.button};
    align-items: center;
    padding: 16px;
    border-radius: 16px;
    margin-right: 16px;

`;

export const BudgetIcon = styled(Icon).attrs({
    size: 32,
    color: globalTheme.colors.initialGradientColor
})``;

export const IdentificationWrapper = styled.View`
    justify-content: space-between;
    background: ${({theme}) => theme.colors.card};
    
`;

export const BudgetName = styled.Text`
  color: ${({theme}) => theme.colors.endGradientColor};
  font-size: ${RFValue(14)}px;
`;

export const BudgetDate = styled.Text`
color: ${({theme}) => theme.colors.endGradientColor};
  font-size: ${RFValue(12)}px;
`

export const AmountText = styled.Text`
  color: ${({theme}) => theme.colors.endGradientColor};
  font-size: ${RFValue(16)}px;
`;