import { ViewStyle, TextStyle } from 'react-native';
import { View, Text } from '@/components/Themed';
import styles from './styles';
import Title from '../../Text/Title';

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
      <Title style={titleStyle}>{title}</Title>
      <Title style={subtitleStyle}>{subtitle}</Title>
    </View>
  );
}