import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Output from '../../components/Output';
import Settings from '../../components/Settings';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  const [data, setData] = useState({});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Memorable Password</Text>
      <Output />
      <View style={styles.hintContainer}>
        <Text style={styles.hintTitle}>Memorization Tip: </Text>
        <Text style={styles.hintText}>Roses Are Red, violets are blue</Text>
      </View>
      <Settings />
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
});
