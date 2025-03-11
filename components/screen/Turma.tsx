import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { View } from '@/components/Themed';
import Header from '@/components/Layout/Header';
import ImageComponent from '@/components/Image/ImageComponent';
import CustomTextInput from '@/components/TextInput/CustomTextInput';
import TurmaList, { TurmaType } from '../List/TurmaList';

const courseColors = [
  '#FF6B6B', // Vermelho
  '#4ECDC4', // Turquesa
  '#45B7D1', // Azul claro
  '#96CEB4', // Verde água
  '#FFEEAD', // Amarelo
  '#D4A5A5', // Rosa
];

const turmasData: TurmaType[] = Array.from({ length: 6 }, (_, i) => ({
  id: `${i + 1}`,
  name: `DSM${i + 1}`,
  color: courseColors[i % courseColors.length] // Cicla pelas cores
}));

export default function TurmaScreen() {
  return (
    <View style={styles.container}>
      <>
        <Header
          title="Turma:"
          subtitle="DSM4"
          containerStyle={styles.customHeader}
          subtitleStyle={{ color: '#2f95dc' }}
        />

        <ImageComponent
          uri="https://i.pinimg.com/originals/c6/69/c0/c669c0fc50112bbda1ad0d16856aee98.png"
          imageStyle={styles.customImage}
        />

        <CustomTextInput
          hint="Digite o nome da turma..."
          inputStyle={styles.customInput}
        // defaultValue="Valor inicial opcional"
        />

      </>
      <TurmaList
        turmas={turmasData}
        style={styles.listContainer}
        itemStyle={styles.listItem}
      />

      <TurmaList
        turmas={turmasData}
        style={{ paddingHorizontal: 0 }}
        itemStyle={{
          backgroundColor: '#e3f2fd',
          borderLeftWidth: 4,
          borderLeftColor: '#2196f3'
        }}
      />


      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  customHeader: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    margin: 16,
    padding: 12,
  },
  customImage: {
    borderRadius: 100,
    marginVertical: 16,
    alignSelf: 'center',
  },
  customInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  listItem: {
    backgroundColor: '#ffffff',
    shadowOpacity: 0.05,
  },
});