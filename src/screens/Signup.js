import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import React from 'react';

import styles from '../styles/global';
import Input from '../components/Input';

import bg from '../assets/bg.jpg';

const Signup = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onLogin = () => {
    if (email === 'admin@mail.com' && password === 'admin') {
      Alert.alert('Success', 'Login Success');
    } else {
      Alert.alert('Error', 'Wrong username or password');
    }
    // console.log('Hello from login')
  };
  return (
    <View contentContainerStyle={styleLocal.container} style={styles.wrapper}>
      <View style={styles.header}>
        <ImageBackground source={bg} style={styleLocal.flex} />
      </View>
      <ScrollView
        contentContainerStyle={styleLocal.container}
        style={styles.content}>
        <View style={styles.textHeader}>
          <Text style={styles.text}>Welcome back</Text>
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input placeholder="Full Name" icon="user" type="number-pad" />
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            onChange={text => setEmail(text)}
            placeholder="Email"
            icon="envelope"
            type="email-address"
          />
        </View>
        <View style={styleLocal.inputWrapper}>
          <Input
            onChange={text => setPassword(text)}
            placeholder="Password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onLogin}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text>Push this screen</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        {/* <ImageBackground source={bg} style={styleLocal.flex} /> */}
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  flex: {
    flex: 1,
  },
});

export default Signup;
