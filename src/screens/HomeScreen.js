import React from 'react';
import { ScrollView } from 'react-native'

import { SearchEmergencyComponent, ERListComponent, EmergencyCallComponent } from '../components'


export class HomeScreen extends React.Component {
    static navigationOptions = {
        title : 'Emergency'
    };

    
    render() {
        return (
        <ScrollView>
            <SearchEmergencyComponent navigation={ this.props.navigation }/>
            <ERListComponent />
            <EmergencyCallComponent />
        </ScrollView>        
        );
    }
}
  