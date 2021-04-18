import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

interface FlattButtonProps {
  onPress: any;
  text: string;
}

const FlattButton: React.FC<FlattButtonProps> = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlattButton;
