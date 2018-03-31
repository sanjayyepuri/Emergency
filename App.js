import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { HomeScreen, TreatmentScreen} from './src/screens';

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Treatment: {
    screen: TreatmentScreen,
  },
},
{
  initialRouteName: 'Home',
}
);

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
