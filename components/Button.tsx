import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isClicked?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, isClicked, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, isClicked && styles.clicked, containerStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue', // Change the color to your preferred button background color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Change the color to your preferred button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  clicked: {
    opacity: 0.7,
    backgroundColor: 'green',
  },
});

export default Button;
