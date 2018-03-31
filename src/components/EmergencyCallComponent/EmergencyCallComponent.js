import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';
import call from 'react-native-phone-call';
import Icon from 'react-native-vector-icons/Foundation'

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

                <View style = {styles.buttonContainer} >
                    <Button
                        onPress = {this._onPressButton}
                        title="Call 911"           
                    >
                    </Button>
                </View>
        );
    }
}

let styles = RkStyleSheet.create(theme => ({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 15
    }
  }));