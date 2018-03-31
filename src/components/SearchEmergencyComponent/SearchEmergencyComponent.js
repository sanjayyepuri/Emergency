import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RkButton, RkTextInput, RkStyleSheet } from 'react-native-ui-kitten';


import { Examples, ListView, Tile, Title, Subtitle, Divider, Touchable } from '@shoutem/ui';


export class SearchEmergencyComponent extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.navigation
        };
    }

    render() {

        const navigation = this.state.navigation;


        return (<RkTextInput 
            placeholder="What's the Emergency?" 
            onSubmitEditing={() =>{ navigation.navigate('Treatment') }}
            returnKeyType="search"/>);
    }
}

let styles = RkStyleSheet.create(theme => ({
    root: {
      backgroundColor: theme.colors.screen.base
    },
    title: {
      marginBottom: 5
    },
  }));