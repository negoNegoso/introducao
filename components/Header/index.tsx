import { ViewStyle, TextStyle } from 'react-native';
import { View, Text } from '@/components/Themed';
import styles from './styles';

type HeaderProps = {
  title: string;
  subtitle: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
};

export default function Header({
  title,
  subtitle,
  containerStyle,
  titleStyle,
  subtitleStyle,
}: HeaderProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.title, subtitleStyle]}>{subtitle}</Text>
    </View>
  );
}