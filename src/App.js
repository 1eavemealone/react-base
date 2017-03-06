import React from 'react';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Dashboard from './components/Dashboard/dashboard';


import {
  Platform,
  View,
  Text,
  StyleSheet,
  Navigator
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Navigator initialRoute={{
          id: 'Login'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    )
  }
  navigatorRenderScene(route, navigator) {
      _navigator = navigator;
      switch (route.id) {
        case 'Login':
          return(<Login navigator={navigator}/>);
        case 'Register':
          return(<Register navigator={navigator}/>);
        case 'Dashboard':
          return(<Dashboard navigator={navigator}/>);
      }
  }
}

export default App;
