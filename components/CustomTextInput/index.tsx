import { TextInput, ViewStyle, TextStyle } from 'react-native';
import styles from './styles';

type CustomTextInputProps = {
  defaultValue?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
};

export default function CustomTextInput({
  defaultValue,
  containerStyle,
  inputStyle,
}: CustomTextInputProps) {
  return (
    <TextInput
      style={[styles.input, inputStyle]}
      defaultValue={defaultValue}
    />
  );
}