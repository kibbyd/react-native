import React, { Component } from 'react';
import { ScrollView, FlatList} from 'react-native';
import { PARTNERS } from '../shared/partners';
import { Card, ListItem  } from 'react-native-elements';
import Mission from './MissionComponent'; 


class About extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        
        const renderPartner  = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );

        };

        return (
            <ScrollView>
                <Mission />
                <Card title={"Community Partners"}>
                    <FlatList
                    data={this.state.partners}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                    >
                    </FlatList>
                </Card>
            </ScrollView> 
        );
        
    }
    
}



export default About;