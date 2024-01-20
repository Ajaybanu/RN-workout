import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from "./components/Header"

function App() {
  return (
    <>
    <Header/>
      <View style={Styles.container}>
        <Text style={Styles.word}>hello world</Text>
      </View>
      <View style={Styles.container}>
        <Text style={Styles.word}>my name is ajay </Text>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',  // Fix: 'center' instead of center
    justifyContent: 'center',  // Fix: 'center' instead of center
  },
  word:{
    fontSize:20,
    fontweight:"bold"
    
  },
});

export default App;
