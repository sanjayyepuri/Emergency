import React from 'react';
import { View, Text } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';

export class EmergencyCallComponent extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<Text>EmergencyCallComponent</Text>);
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