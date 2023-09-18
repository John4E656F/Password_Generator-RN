import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

interface OutputProps {
  generatedPassword: string;
}

const Output: React.FC<OutputProps> = ({ generatedPassword }) => {
  return (
    <View
      style={{
        ...styles.outputContainer,
      }}
      lightColor='black'
      darkColor='white'
    >
      <Text>{generatedPassword}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outputContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
});

export default Output;
