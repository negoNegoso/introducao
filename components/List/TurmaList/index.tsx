import { FlatList, ListRenderItem, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
import { TurmaItem } from '@/components/List/TurmaItem';

export type TurmaType = {
  id: string;
  name: string;
  // Adicione mais propriedades conforme necessário
};

type TurmaListProps = {
  turmas: TurmaType[];
  style?: StyleProp<ViewStyle>;
  itemStyle?: ViewStyle;
};

export default function TurmaList({ turmas, style, itemStyle }: TurmaListProps) {
  const renderItem: ListRenderItem<TurmaType> = ({ item }) => (
    <TurmaItem turma={item} style={itemStyle} />
  );

  return (
    <FlatList
      data={turmas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={[styles.container, style]}
      showsVerticalScrollIndicator={false}
    />
  );
}