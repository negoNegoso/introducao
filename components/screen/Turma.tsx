import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { View } from '@/components/Themed';
import Header from '@/components/Layout/Header';
import ImageComponent from '@/components/Image/ImageComponent';
import CustomTextInput from '@/components/TextInput/CustomTextInput';
import TurmaList, { TurmaType } from '../List/TurmaList';
import { useState } from 'react';

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
  const [selectedTurmaColor, setSelectedTurmaColor] = useState('#2f95dc'); // Cor inicial

  const handleTurmaPress = (turma: TurmaType) => {
    setSelectedTurmaColor(turma.color);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header
          title="Turma:"
          subtitle="DSM4"
          containerStyle={styles.customHeader}
          subtitleStyle={{ color: selectedTurmaColor }} // Cor dinâmica
        />

        <ImageComponent
          uri="https://i.pinimg.com/originals/c6/69/c0/c669c0fc50112bbda1ad0d16856aee98.png"
          imageStyle={styles.customImage}
          color={selectedTurmaColor} // Nova prop
        />

        <TurmaList
          turmas={turmasData}
          onTurmaPress={handleTurmaPress} // Nova prop
          // ... outras props
        />
      </ScrollView>
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