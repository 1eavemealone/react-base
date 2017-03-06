import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';

class Login extends React.Component {

  gotoDashboard() {
    this.props.navigator.push({
      id: 'Dashboard'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <StatusBar  backgroundColor="#3498db" barStyle="light-content"/>
          <TextInput
            autoCorrect={false}
            placeholder="Username"
            underlineColorAndroid='transparent'
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}/>

          <TextInput
            autoCorrect={false}
            placeholder="Password"
            underlineColorAndroid='transparent'
            secureTextEntry
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            ref={(input) => this.passwordInput = input}
            style={styles.input}/>

          <TouchableOpacity onPress={this.gotoDashboard.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#3498db',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 12

  }
});

export default Login;
