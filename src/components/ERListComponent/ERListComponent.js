import React from 'react';
import { View, Text } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';


export class ERListComponent extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<Text>ERListComponent</Text>);
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