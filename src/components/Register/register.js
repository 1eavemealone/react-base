import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
            <Text>
                Register
            </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
 }
});

export default Register;
