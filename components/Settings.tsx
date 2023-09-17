import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import Button from './Button';
import PasswordLengthInput from './PasswordLengthInput';

const Settings = () => {
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [capitalize, setCapitalize] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);

  const handleNumbers = () => {
    setNumbers(!numbers);
  };

  const handleSymbols = () => {
    setSymbols(!symbols);
  };

  const handleCapitalize = () => {
    setCapitalize(!capitalize);
    setUppercase(false);
    setLowercase(false);
  };

  const handleUppercase = () => {
    setUppercase(!uppercase);
    setCapitalize(false);
    setLowercase(false);
  };

  const handleLowercase = () => {
    setLowercase(!lowercase);
    setCapitalize(false);
    setUppercase(false);
  };
  return (
    <View>
      <Text style={styles.subTitle}>Settings</Text>
      <PasswordLengthInput />
      <View style={styles.double}>
        <Button title='Numbers' containerStyle={styles.button} onPress={() => handleNumbers()} isClicked={numbers === true ? true : false} />
        <Button title='Symbols' containerStyle={styles.button} onPress={() => handleSymbols()} isClicked={symbols === true ? true : false} />
      </View>
      <View style={styles.single}>
        <Button title='Capitalize' containerStyle={styles.button} onPress={() => handleCapitalize()} isClicked={capitalize === true ? true : false} />
      </View>
      <View style={styles.double}>
        <Button title='Uppercase' containerStyle={styles.button} onPress={() => handleUppercase()} isClicked={uppercase === true ? true : false} />
        <Button title='Lowercase' containerStyle={styles.button} onPress={() => handleLowercase()} isClicked={lowercase === true ? true : false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  double: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  single: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: 110,
  },
});

export default Settings;
