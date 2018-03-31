import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';
import { RkButton, RkTextInput, RkText, RkStyleSheet, RkCard } from 'react-native-ui-kitten'

import data from '../../sample';
import { Heading, Subtitle } from '@shoutem/ui';


export class TreatmentScreen extends React.Component { 

    

    static navigationOptions = {
        title: data.title,
    };

    render() {
        var treatment = [];
        data.steps.forEach((step, i) => treatment.push({key: i+1, step: step}));
        
        return (
        <ScrollView style={styles.root}>
            <RkCard rkType='article'>
            <View rkCardHeader>
                <View>
                <Heading> {data.title} </Heading>
                </View>
            </View>
            <View rkCardContent>
                <View>
                    <Subtitle> {data.description} </Subtitle>
                </View>
            </View>
            <View rkCardFooter>
            <FlatList
                    data = { treatment }
                    renderItem = { ({item}) => <Text>{item.key}. {item.step}</Text>}
                    />
            </View>
            </RkCard>
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