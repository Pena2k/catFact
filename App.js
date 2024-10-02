import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useCatFact } from './useCatFact';

export default function App() {
  //custom hook kissa faktan hakemiseen
  const { catFact, loading, fetchCatFact } = useCatFact();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random kissa fakta</Text>
      {loading ? <Text>Loading...</Text> : <Text style={styles.fact}>{catFact}</Text>}
      <Button title="Hae uusi kissa fakta" onPress={fetchCatFact} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  fact: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
