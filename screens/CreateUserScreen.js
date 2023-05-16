import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { database } from '../database/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === '') {
      alert('Por favor, ingresa un nombre');
    } else {
      await addDoc(collection(database, 'usuarios'), state);
      props.navigation.navigate('UserList');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          placeholderTextColor="#ffffff"
          onChangeText={(value) => handleChangeText('name', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#ffffff"
          onChangeText={(value) => handleChangeText('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#ffffff"
          onChangeText={(value) => handleChangeText('phone', value)}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => saveNewUser()}
      >
        <Text style={styles.buttonText}>Guardar usuario</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#000000'
  },
  inputGroup: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff'
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#ffffff'
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default CreateUserScreen;
