import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import TurmaList, { TurmaType } from '../List/TurmaList';
import Header from '../Layout/Header';
import ImageComponent from '../Image/ImageComponent';
import CustomTextInput from '../TextInput/CustomTextInput';


const courseColors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1',
  '#96CEB4', '#FFEEAD', '#D4A5A5'
];

const turmasData: TurmaType[] = Array.from({ length: 6 }, (_, i) => ({
  id: `${i + 1}`,
  name: `DSM${i + 1}`,
  color: courseColors[i % courseColors.length]
}));

export default function TurmaScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTurmaColor, setSelectedTurmaColor] = useState(courseColors[3]);

  const filteredTurmas = turmasData.filter(turma =>
    turma.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const ListHeaderComponent = (
    <>
      <Header
        title="Turma:"
        subtitle="DSM4"
        containerStyle={styles.customHeader}
        subtitleStyle={{ color: selectedTurmaColor }}
      />

      <ImageComponent
        uri="https://i.pinimg.com/originals/c6/69/c0/c669c0fc50112bbda1ad0d16856aee98.png"
        color={selectedTurmaColor}
        imageStyle={styles.customImage}
      />

      <CustomTextInput
        hint="Buscar turma..."
        onChangeText={setSearchQuery}
        inputStyle={styles.customInput}
      />
    </>
  );

  return (
    <View style={styles.container}>
      <TurmaList
        turmas={filteredTurmas}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.listContent}
        onTurmaPress={(turma) => setSelectedTurmaColor(turma.color)}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 40,
  },
  customHeader: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    margin: 16,
    padding: 12,
  },
  customImage: {
    alignSelf: 'center',
  },
  customInput: {
    backgroundColor: '#fff',
  },
});