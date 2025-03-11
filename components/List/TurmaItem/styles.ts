// src/components/TurmaList/styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1, // Para Android
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});