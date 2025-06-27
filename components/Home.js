// components/Home.js o screens/Home.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { removeSession } from '../utils/sesiones'; 

export default function Home() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await removeSession();
    navigation.replace('Login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Inicio</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
  },
  title: {
    fontSize: 24, marginBottom: 20,
  },
  button: {
    backgroundColor: 'red', padding: 15, borderRadius: 8, width: '60%', alignItems: 'center',
  },
  buttonText: {
    color: '#fff', fontSize: 16,
  },
});
