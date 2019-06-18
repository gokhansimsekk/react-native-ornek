import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
   render() {
      return (
         <TouchableOpacity style={styles.button} onPress={this.props.click}>
            <Text style={styles.text}>{this.props.children}</Text>
         </TouchableOpacity>
      );
   }
}

const styles = {
   button: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1.5,
      borderColor: '#0984e3',
      margin: 5
   },
   text: {
      alignSelf: 'center',
      color: '#0984e3',
      fontSize: 16,
      fontWeight: '500',
      padding: 10
   }
}