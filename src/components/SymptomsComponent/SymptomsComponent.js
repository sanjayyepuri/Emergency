import React from 'react';
import { RkStyleSheet } from 'react-native-ui-kitten';
import { View, Text } from 'react-native';

export class SymptomsComponent extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<Text>SymptomsComponent</Text>);
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