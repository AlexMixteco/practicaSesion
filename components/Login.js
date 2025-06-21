import React from 'react';
import { Text, TextInput, View, ImageBackground, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const imgbg = require('../assets/hamburger-895831_1280.jpg');

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground source={imgbg} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.containerUserName}>
          <Icon type="font-awesome" name="user" color="gray" containerStyle={styles.icon} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
        </View>

        <View style={styles.containerPassword}>
          <Icon type="entypo" name="key" color="gray" containerStyle={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>

        <View style={styles.containerSignIn}>
          <Button
            title="SIGN IN"
            buttonStyle={{ backgroundColor: '#ffa100' }}
            onPress={() => alert('Login Presionado')}
          />
        </View>

        <View style={styles.containerRegister}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Create an Account?
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{ color: 'red', fontWeight: 'bold' }}
            >
              {' '}
              Register
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  containerSignIn: {
    height: 60,
    marginHorizontal: '6%',
    paddingTop: '2%',
  },
  containerUserName: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: '10%',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerPassword: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: '10%',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerRegister: {
    height: 60,
    marginHorizontal: '6%',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    flex: 1,
    color: 'black',
  },
});
