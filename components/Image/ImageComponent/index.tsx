import { Image, ViewStyle, ImageStyle } from 'react-native';
import styles from './styles';

type ImageComponentProps = {
  uri: string;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
};

export default function ImageComponent({
  uri,
  containerStyle,
  imageStyle,
}: ImageComponentProps) {
  return (
    <Image 
      source={{ uri }} 
      style={[styles.image, imageStyle]} 
    />
  );
}