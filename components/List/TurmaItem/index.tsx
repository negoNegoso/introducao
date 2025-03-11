import { TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';
import Title from '@/components/Text/Title';
import { TurmaType } from '@/components/List/TurmaList';

type TurmaItemProps = {
  turma: TurmaType;
  style?: ViewStyle;
  onPress?: () => void;
};

export function TurmaItem({ turma, style, onPress }: TurmaItemProps) {
  return (
    <TouchableOpacity
      style={[styles.itemContainer, style]}
      onPress={onPress}
    >
      
      <Title style={styles.itemText}>{turma.name}</Title>
      {/* Adicione ícones ou mais informações aqui */}
    </TouchableOpacity>
  );
}