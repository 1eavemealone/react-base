import React from 'react';
import Login from './components/Login/login';


import {
  Platform,
  View,
  Text,
  StyleSheet,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Login/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#3498db',
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
