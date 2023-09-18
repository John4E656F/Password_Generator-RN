import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, TextInput } from '../../components/Themed';
import { DataState } from '../../types/types';
import Output from '../../components/Output';
import Settings from '../../components/Settings';
import Button from '../../components/Button';
import { capitalize } from '../../tools/capitalize';
import { uppercase } from '../../tools/upperCase';
import { lowercase } from '../../tools/lowercase';
import { addNumber } from '../../tools/addNumber';
import { addSymbols } from '../../tools/addSymbols';
import { removeSpaces } from '../../tools/removeSpaces';

export default function Custom() {
  const [userInput, setUserInput] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [data, setData] = useState<DataState>({
    numbers: false,
    symbols: false,
    capitalize: false,
    uppercase: false,
    lowercase: false,
  });

  const dataHandler = (key: keyof DataState, value: any) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleGeneratePassword = () => {
    let password = userInput;

    if (data.capitalize) {
      password = capitalize(password);
    }
    if (data.uppercase) {
      password = uppercase(password);
    }

    if (data.lowercase) {
      password = lowercase(password);
    }

    if (data.numbers) {
      password = addNumber(password);
    }

    if (data.symbols) {
      password = addSymbols(password);
    }

    setGeneratedPassword(removeSpaces(password));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Memorable Password</Text>
      <Output generatedPassword={generatedPassword} />
      <Settings data={data} dataHandler={dataHandler} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
        placeholder='Enter text here'
        placeholderTextColor='gray'
      />
      <Button title='Generate' onPress={() => handleGeneratePassword()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
