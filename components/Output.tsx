import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

export default function Output() {
  return (
    <View
      style={{
        ...styles.outputContainer,
      }}
      lightColor='black'
      darkColor='white'
    >
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  outputContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
});
