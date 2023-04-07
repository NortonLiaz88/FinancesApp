import styled from "styled-components/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

export const InitialStepWrapper =  styled.View`
    margin-top: ${hp(3)}px;
    align-items: center;
`;

export const Message = styled.Text`
    font-size: ${RFValue(24)}px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.endGradientColor};
    text-align: left;
    width: 100%;
`