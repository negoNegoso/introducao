import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, Image, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.containerHeader}>
            <Text style={styles.title}>Turma:</Text>
            <Text style={styles.title}>DSM4</Text>
          </View>
        <View>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/c6/69/c0/c669c0fc50112bbda1ad0d16856aee98.png',
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="You can type in me"
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
  containerHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
