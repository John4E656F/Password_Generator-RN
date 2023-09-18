import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from './Themed';
import Button from './Button';
import { DataState } from '../types/types';

type SettingsProps = {
  data: DataState;
  dataHandler: (key: keyof DataState, value: boolean) => void;
};
const Settings: React.FC<SettingsProps> = ({ data, dataHandler }) => {
  const handleNumbers = () => {
    dataHandler('numbers', !data.numbers);
  };

  const handleSymbols = () => {
    dataHandler('symbols', !data.symbols);
  };

  const handleCapitalize = () => {
    dataHandler('capitalize', !data.capitalize);
    dataHandler('uppercase', false);
    dataHandler('lowercase', false);
  };

  const handleUppercase = () => {
    dataHandler('uppercase', !data.uppercase);
    dataHandler('capitalize', false);
    dataHandler('lowercase', false);
  };

  const handleLowercase = () => {
    dataHandler('lowercase', !data.lowercase);
    dataHandler('capitalize', false);
    dataHandler('uppercase', false);
  };
  return (
    <View>
      <View style={styles.double}>
        <Button title='Numbers' containerStyle={styles.button} onPress={handleNumbers} isClicked={data.numbers} />
        <Button title='Symbols' containerStyle={styles.button} onPress={handleSymbols} isClicked={data.symbols} />
      </View>
      <View style={styles.single}>
        <Button title='Capitalize' containerStyle={styles.button} onPress={handleCapitalize} isClicked={data.capitalize} />
      </View>
      <View style={styles.double}>
        <Button title='Uppercase' containerStyle={styles.button} onPress={handleUppercase} isClicked={data.uppercase} />
        <Button title='Lowercase' containerStyle={styles.button} onPress={handleLowercase} isClicked={data.lowercase} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
