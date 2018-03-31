import React from 'react';
import { View, Text, Button } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';
import call from 'react-native-phone-call';

const callER = {
    number: '911 ',
    prompt: false
}

export class EmergencyCallComponent extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {};
    }

    _onPressButton() {
        call(callER).catch(console.error)
    }

    render() {
        return (
            <Button
                onPress = {this._onPressButton}
                title = "Call an Emergency Hotline"
            >
            </Button>
        );
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