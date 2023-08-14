import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Cadastro = ( { navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = () => {
    // Lógica para enviar os dados do formulário para o servidor
    const dadosUsuario = {
      nome,
      email,
      senha
    };
    console.log(dadosUsuario);

    // URL da sua API no Firebase para cadastro de usuários
    const apiUrl = 'http://localhost:5000/api/caduser';

    axios.post(apiUrl, dadosUsuario)
      .then((response) => {
        console.log('Dados salvos no Firebase:', response.data);
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Erro ao salvar os dados:', error);
        // Trate possíveis erros aqui
      });
  };

  return (
    <View style={styles.cadastroUsuarioContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro de Usuário</Text>

        <View style={styles.inputContainer}>
          <Text>Nome:</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Senha:</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            required
          />
        </View>

        <Button title="Cadastrar" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cadastroUsuarioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

export default Cadastro;
