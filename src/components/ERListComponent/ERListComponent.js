import React from 'react';
import { View, Text } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';
import { ListView, Row, Subtitle } from '@shoutem/ui';

import sample_er from '../../../sample-ers';


export class ERListComponent extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {};
        this.renderListRow = this.renderListRow.bind(this);
    }

    renderListRow(er) {
        return (
            <View>
                <Row>
                    <View>
                        <Subtitle>{er.name}</Subtitle>
                        <Text>{er.address}</Text>
                    </View>
                </Row>            
            </View>
        )
    }

    render() {



        return (
            <View rkStyle={styles.root}>
                <ListView data={sample_er.data} renderRow={this.renderListRow} />
            </View>
        );
    }
}

let styles = RkStyleSheet.create(theme => ({
    root: {
      backgroundColor: theme.colors.screen.base
    }
  }));