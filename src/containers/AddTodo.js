import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const AddTask = () => {
  const initValues = {task: '', description: ''};

  const [enteredText, setEnteredText] = useState(initValues);

  let data = {taskName: enteredText.task, taskDescp: enteredText.description};

  return (
    <View style={styles.display}>
      <Text>Here is the entered text : {enteredText.task} </Text>
      <Text>Here is the entered text : {enteredText.description} </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textType}
          placeholder={'Type in Task here'}
          value={enteredText.task}
          onChangeText={value => setEnteredText({...enteredText, task: value})}
        />

        <TextInput
          style={[styles.textType]}
          placeholder={'Type in description here'}
          value={enteredText.description}
          onChangeText={value =>
            setEnteredText({...enteredText, description: value})
          }
        />

        <TouchableOpacity
          style={styles.fabbtn}
          onPress={() => Actions.TodoWelcome()}>
          <Text style={styles.fabText}>Add new task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
  },
  display: {
    flex: 1,
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
  fabbtn: {
    height: '8%',
    backgroundColor: '#68a0cf',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: '5%',
    marginBottom: 0,
  },

  fabText: {
    color: 'white',
    fontWeight: '700',
  },
});
