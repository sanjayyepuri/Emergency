import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';


export class HomeScreen extends React.Component {
    static navigationOptions = {
        title : 'Home'
    };

    render() {
        return (
        <View>
            <RkTextInput 
                placeholder="What's the Emergency?" 
                onSubmitEditing={() =>{ this.props.navigation.navigate('Treatment') }}
                returnKeyType="search"/>
        </View>        
        );
    }
}
  