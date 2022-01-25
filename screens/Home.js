import { View, Text, Button, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Image, Card } from 'react-native-elements';
import vehicleData from '../api/vehicle_example.json';
import vehicleImage from '../api/vehicle_image.json';

class HomeScreen extends Component {
    componentDidMount() {
        console.log(vehicleData);
        console.log(vehicleImage);
    }

    render() {
        const { make, model, year } = vehicleData.data;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My Car</Text>
                <Card>
                    <Card.Title>{ year } {make} {model}</Card.Title>
                    <Card.Image source={vehicleImage.data.image}></Card.Image>
                </Card>
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