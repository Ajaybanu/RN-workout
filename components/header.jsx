import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Header() {
  return (
    <>
      <View style={Styles.container}>
        <Text style={Styles.word}>Hi....I am header</Text>
      </View>
      <View style={Styles.container}>
        <Text style={Styles.word}>Hey... i am user supporting assistent </Text>
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

export default Header;
