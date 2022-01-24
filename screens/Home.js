import { View, Text, Button, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My Car</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginTop: 20
    },
    title: {
        fontSize: 36
    }
})

export default HomeScreen;