import React, {useState} from 'react';
import {InputText, InputWrapper, Label} from './styles';
import {TextInputProps} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import theme from '../../styles/theme';
interface InputProps extends TextInputProps {
  iconName?: React.ComponentProps<typeof FontAwesome>['name'];
  value?: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <InputWrapper isFocused={isFocused || isFilled}>
      <Label>{label}</Label>
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        placeholderTextColor={theme.colors.text}
        {...rest}
      />
    </InputWrapper>
  );
};
