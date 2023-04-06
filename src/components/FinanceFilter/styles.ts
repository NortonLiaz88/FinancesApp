import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';

export type DateButtonTypes = {
  selected?: boolean;
};

export const Wrapper = styled.View`
  margin-top: ${hp(3)}px;
`;

export const FilterWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

export const PickerWrapper = styled.View`
  border-radius: 8px;
  border-width: 1px;
  border-color: transparent;
  overflow: hidden;
  width: 40%;
`;

export const PeriodPicker = styled(Picker)`
  background: ${({theme}) => theme.colors.card};
  /* border-radius: 5px; */
  color: ${({theme}) => theme.colors.initialGradientColor};
`;

export const DateList = styled.FlatList`
  margin-top: 16px;
`;

export const DateButton = styled.TouchableOpacity<DateButtonTypes>`
  background: ${({theme}) => theme.colors.button};
  border-radius: 8px;
  padding: 4px 12px;

  margin-right: 8px;

  ${props =>
    props.selected &&
    css`
      background-color: ${({theme}) => theme.colors.endGradientColor};
    `};
`;
export const DateButtonText = styled.Text<DateButtonTypes>`
  color: ${({theme}) => theme.colors.endGradientColor};
  font-size: ${RFValue(12)}px;
  font-weight: bold;

   ${props =>
    props.selected &&
    css`
      color: ${({theme}) => theme.colors.background};
    `};
`;
