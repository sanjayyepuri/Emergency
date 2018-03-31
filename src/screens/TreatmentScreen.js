import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RkButton, RkTextInput, RkText } from 'react-native-ui-kitten';

import data from '../../sample';


export class TreatmentScreen extends React.Component { 

    

    static navigationOptions = {
        title: data.title,
    };

    render() {
        var treatment = [];
        data.steps.forEach((step, i) => treatment.push({key: i+1, step: step}));

        return (
        <View>
            <RkText>HELLO</RkText>
            <FlatList
                data = { treatment }
                renderItem = { ({item}) => <Text>{item.key}. {item.step}</Text>}
                />
        </View>
      );
    }
}