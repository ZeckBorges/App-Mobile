import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Image source={require('./profile.jpg')} style={styles.image} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.username}>Nome do Usuário</Text>
        <Text style={styles.description}>Descrição do usuário Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      <Text style={styles.infoHeading}>Informações:</Text>
      <View style={styles.infoList}>
        <Text><Text style={styles.boldText}>Idade:</Text> 25 anos</Text>
        <Text><Text style={styles.boldText}>Localização:</Text> Cidade, País</Text>
        <Text><Text style={styles.boldText}>Interesses:</Text> Esportes, Música, Viagens</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#e1e1e1',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userInfo: {
    marginTop: 20,
  },
  username: {
    margin: 0,
    fontSize: 24,
  },
  description: {
    margin: 0,
    fontSize: 16,
  },
  infoHeading: {
    marginVertical: 20,
    fontSize: 18,
  },
  infoList: {
    listStyle: 'none',
    padding: 0,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Perfil;
