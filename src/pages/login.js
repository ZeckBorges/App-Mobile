import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Perfil from './perfil';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYWlBaZAM0qeE0uon8xCK70aYxer_uvaQ",
  authDomain: "todolist-c6330.firebaseapp.com",
  projectId: "todolist-c6330",
  storageBucket: "todolist-c6330.appspot.com",
  messagingSenderId: "329089233545",
  appId: "1:329089233545:web:f95708cb7814496f810c58"
};

initializeApp(firebaseConfig);

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {

    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, senha)
      .then( async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const uid = user.uid;
            console.log('id',uid);

            navigation.navigate('Perfil', {uid});
            
            
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      });
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Senha:</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
