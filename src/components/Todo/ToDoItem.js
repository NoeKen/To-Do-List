import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem = ({item, removeItem}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.task}> {item?.text} </Text>
        <Text style={styles.descp}> {item?.descp} </Text>
      </View>
      <TouchableOpacity
        style={styles.delBtn}
        onPress={() => {
          removeItem(item.id);
        }}>
        <Text style={styles.delBtnTxt}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    paddingTop: '5%',
    borderRadius: 5,
    borderColor: '#dde0e9',
    flexDirection: 'row',
  },
  container2s: {
    flex: 1,
  },

  task: {
    fontWeight: '600',
    color: 'black',
  },

  descp: {
    color: '#dde0e9',
  },
  delBtn: {
    position: 'absolute',
    right: 30,
    top: 20,
  },
  delBtnTxt: {
    color: '#68a0cf',
    fontWeight: '600',
    fontSize: 20,
  },
});
