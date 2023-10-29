import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Perfil = ({ route }) => {
  const { uid } = route.params;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://192.168.3.34:5000/api/perfil', { uid });
        const dadosUsuario = response.data;
        setNome(dadosUsuario.user.nome);
        setEmail(dadosUsuario.user.email);
        console.log(dadosUsuario);
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    fetchData();
  }, [uid]);

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{nome}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  username: {
    fontSize: 24,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
  },
});

export default Perfil;
