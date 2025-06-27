import React, { useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { saveSession, getSession } from '../utils/sesiones'; 

// Esquema de validación con Yup
const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Correo inválido').required('Requerido'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
});

export default function Login() {
  const navigation = useNavigation();

  // Verifica si ya hay sesión activa al abrir la app
  useEffect(() => {
    const checkSession = async () => {
      const token = await getSession();
      if (token) {
        navigation.replace('Home'); // Redirige si ya hay sesión
      }
    };
    checkSession();
  }, []);

  // Simula login y guarda sesión
  const submit = async (values) => {
    try {
      const fakeToken = 'abc123'; // Simula token recibido de un backend

      await saveSession(fakeToken); // Guarda token en AsyncStorage
      Alert.alert('Login exitoso');
      navigation.replace('Home'); // Redirige a pantalla principal
    } catch (error) {
      Alert.alert('Error', 'No se pudo iniciar sesión');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: 'alejandromixer17@gmail.com', password: '123456' }} // Valores por defecto
        onSubmit={submit}
      >
        {({
          handleChange, handleBlur, handleSubmit, values, errors, touched, isValid,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <Icon name="mail-outline" size={25} style={styles.icon} />
              <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

            <View style={styles.inputContainer}>
              <Icon name="lock-closed-outline" size={25} style={styles.icon} />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={!isValid}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff',
  },
  title: {
    fontSize: 32, marginBottom: 30, fontWeight: 'bold', color: 'black',
  },
  inputContainer: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f1f1',
    borderRadius: 8, paddingHorizontal: 10, marginBottom: 15, width: '100%',
  },
  icon: { marginRight: 10 },
  input: { flex: 1, height: 50 },
  button: {
    backgroundColor: '#1E90FF', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18 },
  error: { color: 'red', alignSelf: 'flex-start', marginBottom: 10 },
});
