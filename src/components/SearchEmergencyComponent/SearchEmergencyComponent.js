import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RkButton, RkTextInput, RkStyleSheet } from 'react-native-ui-kitten';

import database from './documents';

import { Examples, ListView, Tile, Title, Subtitle, Divider, Touchable } from '@shoutem/ui';


export class SearchEmergencyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.navigation
        };
    }

    search(event) {
        var inputText = event.nativeEvent.text.toLowerCase();

        var emergencies = database.emergencies;

        var isPrimitive = function(test) {
            return (test !== Object(test));
        };

        var recursivelyStealText = function(arbitrary, list, parent) {
            var str = "";
            if (isPrimitive(arbitrary)) {
                var comp = { "parent": parent };
                comp.val = (arbitrary + "").toLowerCase();
                list.push(comp);
                return;
            }
            for (var key in arbitrary) {
                recursivelyStealText(arbitrary[key], list, parent);
            }
        }

        var list = [];
        for (var x = 0; x < emergencies.length; x++) {
            recursivelyStealText(emergencies[x], list, emergencies[x]);
        }

        //console.log("verifying search db");
        //for (var x = 0; x < list.length; x++) {
        //    console.log(list[x].val);
        //}


        var matches = [];
        for (var x = 0; x < list.length; x++) {
            var it = list[x];
            if (it.val.includes(inputText)) {
                matches.push(it);
            }
        }
        console.log("logging matches");
        for (var x = 0; x < matches.length; x++) {
            var it = matches[x];
            console.log("Found matching section " + it.parent.title + " inside string " + it.val);
        }

        return matches;

    }

    render() {

        const navigation = this.state.navigation;


        return ( < RkTextInput placeholder = "What's the Emergency?"
            onSubmitEditing = {
                (event) => {
                    const results = this.search(event);
                    navigation.navigate('Treatment', {results: results});
                }
            }
            returnKeyType = "search" / > );
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