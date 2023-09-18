import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Output from '../../components/Output';
import Settings from '../../components/Settings';
import { Text, View } from '../../components/Themed';
import Button from '../../components/Button';
import PasswordLengthInput from '../../components/PasswordLengthInput';
import { DataStatePass } from '../../types/types';
import { generateMemorablePassword } from '../../tools/passwordGenerator';
import { capitalize } from '../../tools/capitalize';
import { uppercase } from '../../tools/upperCase';
import { lowercase } from '../../tools/lowercase';
import { addNumber } from '../../tools/addNumber';
import { addSymbols } from '../../tools/addSymbols';

export default function Generator() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [hint, setHint] = useState('');
  const [data, setData] = useState<DataStatePass>({
    PasswordLengthInput: 3,
    numbers: false,
    symbols: false,
    capitalize: false,
    uppercase: false,
    lowercase: false,
  });

  const dataHandler = (key: keyof DataStatePass, value: any) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleGeneratePassword = () => {
    let { password, hint } = generateMemorablePassword(data.PasswordLengthInput);

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
    setHint(hint);
    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Memorable Password</Text>
      <Output generatedPassword={generatedPassword} />
      <View style={styles.hintContainer}>
        <Text style={styles.hintTitle}>Memorization Tip: </Text>
        <Text style={styles.hintText}>{hint}</Text>
      </View>
      <View style={styles.settings}>
        <Text style={styles.subTitle}>Settings</Text>
        <PasswordLengthInput passwordLength={data.PasswordLengthInput} dataHandler={dataHandler} />
      </View>
      <Settings data={data} dataHandler={dataHandler} />
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
  hintContainer: {
    display: 'flex',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  hintTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FF5F04',
  },
  hintText: {
    flexWrap: 'wrap',
  },
  settings: {
    display: 'flex',
  },
  settingTitle: {
    fontSize: 16,
  },
});
