import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import LoginForm from './LoginForm'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
 }
});

export default Login;
