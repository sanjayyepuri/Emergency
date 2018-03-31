import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
import {NavigationBar} from '@shoutem/ui';

import { HomeScreen, TreatmentScreen} from './src/screens';
import { bootstrap } from './src/config/bootstrap';

bootstrap();



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
},{
headerMode: 'none',
}
);

export default class App extends React.Component {
  state = {
    loaded: false
  };

  _loadAssets = async() => {
    await Font.loadAsync({
      'fontawesome': require('./src/assets/fonts/fontawesome.ttf'),
      'icomoon': require('./src/assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./src/assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Light': require('./src/assets/fonts/Roboto-Light.ttf'),
      'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
      'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf'),
      'Rubik-Black': require('./src/assets/fonts/Rubik-Black.ttf'),
      'Rubik-Bold': require('./src/assets/fonts/Rubik-Bold.ttf'),
      'rubicon-icon-font': require('./src/assets/fonts/rubicon-icon-font.ttf'),
      
      
    });
    this.setState({loaded: true});
  };

  componentWillMount() {
    this._loadAssets();
  }


  render() {
    if(this.state.loaded){
      return (
          <RootStack />
    )
    } else {
      return (<Text>Loading </Text>)
    }
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
