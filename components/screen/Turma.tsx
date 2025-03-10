import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { View } from '@/components/Themed';
import Header from '@/components/Header';
import ImageComponent from '@/components/ImageComponent';
import CustomTextInput from '@/components/CustomTextInput';

export default function TurmaScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
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
          defaultValue="You can type in me"
          inputStyle={styles.customInput}
        />
      </ScrollView>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customHeader: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    margin: 15,
  },
  customImage: {
    borderRadius: 100,
    marginVertical: 20,
  },
  customInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 25,
  },
});