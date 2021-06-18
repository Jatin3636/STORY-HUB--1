import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class writeStory extends React.Component {
  render() {
    return (
      <View style={styles.container1}>
        <TextInput placeholder="Story Title" style={styles.inputBox} />
        <TextInput placeholder="Author" style={styles.inputBox} />
        <TextInput
          placeholder="Write your story here"
          style={styles.inputBox2}
        />
        <TouchableOpacity style={styles.buttonText}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 20,
  },

  inputBox: {
    height: 30,
    width: 300,
    borderWidth: 3,
    fontSize: 20,
    marginTop: 10,
    multiline: true,
  },
  inputBox2: {
    height: 300,
    width: 300,
    borderWidth: 3,
    fontSize: 20,
    marginTop: 10,
    multiline: true,
  },
  button: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 6,
    marginTop: 20,
    backgroundColor: 'pink',
  },
});
