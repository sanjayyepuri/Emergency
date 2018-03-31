import React from 'react';
import { View } from 'react-native'

import { SearchEmergencyComponent, ERListComponent, EmergencyCallComponent } from '../components'


export class HomeScreen extends React.Component {
    static navigationOptions = {
        title : 'Home'
    };

    
    render() {
        return (
        <View>
            <SearchEmergencyComponent navigation={ this.props.navigation }/>
            <ERListComponent />
            <EmergencyCallComponent />
        </View>        
        );
    }
}
  