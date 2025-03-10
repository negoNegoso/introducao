import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import TurmaScreen from '@/components/screen/Turma';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Index.tsx</Text>

      <TurmaScreen />
      {/*
       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
