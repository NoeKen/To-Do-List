import React from 'react';

import { TextInput, View,StyleSheet } from 'react-native';

import { Input } from 'native-base';
const Test = () => {
  return (
    <View style={[styles.container]}>
        
      <Input style={[styles.textType]} placeholder="Type in description here" />

      <TextInput style={[styles.textType]} placeholder="Type in another  description here" />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  textType: {
    borderColor: '#68a0cf',
    borderWidth: 1,
    width: '90%',
    margin: '5%',
    marginBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
