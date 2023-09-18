import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { DataState } from '../types/types';

type PasswordLengthInputProps = {
  passwordLength: number;
  dataHandler: (key: keyof DataState, value: any) => void;
};

const PasswordLengthInput: React.FC<PasswordLengthInputProps> = ({ passwordLength, dataHandler }) => {
  const increasePasswordLength = () => {
    if (passwordLength < 10) {
      const newLength = passwordLength + 1;
      dataHandler('PasswordLengthInput', newLength);
    }
  };

  const decreasePasswordLength = () => {
    if (passwordLength > 3) {
      const newLength = passwordLength - 1;
      dataHandler('PasswordLengthInput', newLength);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Password Length: </Text>
        <View
          style={{
            ...styles.inputContainer,
          }}
          lightColor='black'
          darkColor='white'
        >
          <TouchableOpacity onPress={increasePasswordLength} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.passLength}>{passwordLength}</Text>
          <TouchableOpacity onPress={decreasePasswordLength} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.warning}>Enter password length (8-20)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 100,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
  },
  passLength: {
    color: 'black',
    padding: 2,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  warning: {
    fontSize: 12,
    color: 'yellow',
    marginTop: 5,
  },
});

export default PasswordLengthInput;
