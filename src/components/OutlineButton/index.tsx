import React from 'react';
import {ActivityIndicator} from 'react-native';
import theme from '../../styles/theme';
import {ButtonText, CustomButton} from './styles';

interface Props {
  testID: string;
  accessibilityLabel: string;
  text: Element;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const OutlineButton: React.FC<Props> = ({
  text: btnText,
  disabled,
  loading,
  testID,
  accessibilityLabel,
  onPress,
}: Props) => {
  return (
    <CustomButton
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessible
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator
          animating={loading}
          size="large"
          color={theme.colors.background}
        />
      ) : (
        <ButtonText>{btnText}</ButtonText>
      )}
    </CustomButton>
  );
};

OutlineButton.defaultProps = {
  disabled: false,
  loading: false,
  onPress: () => null,
};

export default OutlineButton;
