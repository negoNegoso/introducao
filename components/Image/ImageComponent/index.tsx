import { Image, ViewStyle, ImageStyle } from 'react-native';
import styles from './styles';
import { View } from '@/components/Themed';

type ImageComponentProps = {
  uri: string;
  color?: string;
  imageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
};

export default function ImageComponent({
  uri,
  color = '#2f95dc', // Cor padrão
  imageStyle,
  containerStyle,
}: ImageComponentProps) {
  return (
    <View style={[styles.container, containerStyle, { borderColor: color }]}>
      <Image
        source={{ uri }}
        style={[styles.image, { tintColor: color }, imageStyle]}
      />
    </View>
  );
}