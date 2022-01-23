import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';

class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

export default HomeScreen;