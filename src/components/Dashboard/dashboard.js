import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

class Dashboard extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <StatusBar  backgroundColor="#3498db" barStyle="light-content"/>
            <Text>
                DASHBOARD HERE
            </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'center',
  }
});

export default Dashboard;
