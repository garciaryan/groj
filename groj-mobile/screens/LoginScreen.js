import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class LoginScreen extends Component {

  checkEmail(){
    //validate email
  }

  render(){
    return (
      <View style={styles.container}>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={checkEmail()} />
        <FormValidationMessage>{'Invalid Email!'}</FormValidationMessage>
      </View>
    );
  }
}

const styles = {
  container: {

  }
}