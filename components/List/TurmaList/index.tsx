import { FlatList, ListRenderItem, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
import { TurmaItem } from '@/components/List/TurmaItem';

// No arquivo do TurmaList
export type TurmaType = {
  id: string;
  name: string;
  color: string; // Nova propriedade
};

type TurmaListProps = {
  turmas: TurmaType[];
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  itemStyle?: ViewStyle;
  onTurmaPress?: (turma: TurmaType) => void;
};
export default function TurmaList({
  turmas,
  ListHeaderComponent,
  contentContainerStyle,
  itemStyle,
  onTurmaPress,
}: TurmaListProps) {
  const renderItem: ListRenderItem<TurmaType> = ({ item }) => (
    <TurmaItem
      turma={item}
      style={itemStyle}
      onPress={() => onTurmaPress?.(item)}
    />
  );

  return (
    <FlatList
      data={turmas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      maxToRenderPerBatch={5}
      windowSize={10}
    />
  );
}