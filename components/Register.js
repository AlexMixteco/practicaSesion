import React from 'react';
import { Text, TextInput, View, ImageBackground, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const imgFooter = require('../assets/hamburger-2253343_640.jpg');

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>REGISTER AND SIGN IN</Text>
      </View>

      <View style={styles.containerRegister}>
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
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.containerSignIn}>
          <Button
            title="SIGN IN"
            buttonStyle={{ backgroundColor: '#ffa100', borderRadius: 20 }}
            onPress={() => alert('Cuenta creada')}
          />
        </View>

        <View style={styles.containerOR}>
          <Text style={{ textAlign: 'center' }}>OR</Text>
        </View>
      </View>

      <ImageBackground source={imgFooter} style={styles.footerImage} resizeMode="cover">
        <View style={styles.containerSocial}>
          <Button
            title="FACEBOOK"
            buttonStyle={{ backgroundColor: 'blue' }}
            icon={{ name: 'facebook-official', type: 'font-awesome', color: 'white' }}
          />
          <Button
            title="TWITTER"
            buttonStyle={{ backgroundColor: '#59c7ff' }}
            icon={{ name: 'twitter', type: 'font-awesome', color: 'white' }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBE6E3',
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#4c4545',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: '12%',
  },
  containerRegister: {
    flex: 2,
    marginHorizontal: '3%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  containerUserName: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: '10%',
    alignItems: 'center',
  },
  containerPassword: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: '10%',
    alignItems: 'center',
    marginTop: '2%',
  },
  containerSignIn: {
    height: 50,
    marginHorizontal: '12%',
    marginTop: '9%',
  },
  containerOR: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    height: '12%',
    width: '12%',
    justifyContent: 'center',
  },
  containerSocial: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: '3%',
  },
  footerImage: {
    flex: 2,
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
