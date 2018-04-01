import React from 'react';
import { View, Text } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';
import { ListView, Row, Subtitle, Title, Touchable, TouchableOpacity } from '@shoutem/ui';

import call from 'react-native-phone-call';


import sample_er from '../../../sample-ers';


export class ResultListComponent extends React.Component { 

    constructor(props) {
        super(props);
        console.log(this.props.result);
        this.state = {
            results: this.props.results
        };
        this.renderListRow = this.renderListRow.bind(this);
    }

    _onPress(erphone) { 
        call(erphone).catch(console.error);
    }

    renderListRow(er) {
        return (
            <TouchableOpacity onPress={() => {this._onPress({prompt: false, number: er.phone})}}>
                <Row>
                    <View>
                        <Title>{er.name}</Title>
                        <Text>{er.address}</Text>
                        <Text>{er.phoneText}</Text>
                    </View>
                </Row>            
            </TouchableOpacity>
        )
    }

    render() {



        return (
            <View rkStyle={styles.root}>
            <Text>Hello</Text>
                {/* <ListView data={sample_er.data} renderRow={this.renderListRow} /> */}
            </View>
        );
    }
}

let styles = RkStyleSheet.create(theme => ({
    root: {
      backgroundColor: theme.colors.screen.base
    }
  }));