import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Empty() {
  return (
    <View style={style.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        //source={{uri: 'https://via.placeholder.com/150'}}
        style={style.image}
        resizeMode="contain"
      />
      <Text style={style.description}>할 일이 없다!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});

export default Empty;
