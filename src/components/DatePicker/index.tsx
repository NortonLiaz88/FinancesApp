import React, {useCallback, useMemo, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {DatePicker, DatePickerProps} from 'react-native-woodpicker';
import {InputWrapper, Label} from './styles';
import theme from '../../styles/theme';
import {RFValue} from 'react-native-responsive-fontsize';

interface InputDatePickerProps extends DatePickerProps {
  iconName?: React.ComponentProps<typeof FontAwesome>['name'];
  label: string;
  placeholder: string;
}

export const InputDatePicker: React.FC<InputDatePickerProps> = ({
  value,
  label,
  placeholder,
  onDateChange,
}: InputDatePickerProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };
  const handleText = useMemo((): string => {
    console.log('HANDLE TEXT', value);
    return  value ? value.toDateString() : `${placeholder}`
  }, [value]);
  return (
    <InputWrapper isFocused={isFilled || isFocused}>
      <Label>{label}</Label>
      <DatePicker
        value={value}
        title={label}
        text={handleText}
        onDateChange={onDateChange}
        onOpen={handleInputFocus}
        onClose={handleInputBlur}
        containerStyle={{
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          height: '38%',

        }}
        textInputStyle={{
          textAlignVertical: 'bottom',
          color: theme.colors.text,
          fontSize: RFValue(10),
        }}
        style={{
          flex: 1,
          borderBottomWidth: 2,
          borderBottomColor: theme.colors.endGradientColor,
        }}
      />
    </InputWrapper>
  );
};
