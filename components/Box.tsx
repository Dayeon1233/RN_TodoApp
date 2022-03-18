import React from 'react';
import {View, StyleSheet} from 'react-native';

const Box = ({rounded, color2}) => {
  console.log('color2', color2);
  console.log('rounded', rounded);
  return (
    <View
      style={[styles.box, rounded && styles.rounded, {backgroundColor: color2}]}
    />
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    width: 32,
    height: 32,
  },
  rounded: {
    borderRadius: 10,
  },
});
