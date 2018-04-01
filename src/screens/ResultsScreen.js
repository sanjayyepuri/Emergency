import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';
import { RkButton, RkTextInput, RkText, RkStyleSheet, RkCard } from 'react-native-ui-kitten'

import { Heading, Subtitle } from '@shoutem/ui';

import { ResultListComponent } from '../components'


export class TreatmentScreen extends React.Component { 

    

    static navigationOptions = {
        title: 'Resutls'
    };

    render() {
        return (
        <ScrollView style={styles.root}>
            <ResultListComponent />
        </ScrollView>
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