import React from 'react';
import {View, Text} from 'react-native';

const Greeting = (props: {name: String | undefined}) => {
  return (
    <View>
      <Text>첫번째 컴포넌트{props.name}</Text>
    </View>
  );
};

Greeting.defaultProps = {
  name: '꾸',
};

export default Greeting;
