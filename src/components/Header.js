import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component {
   render() {
      return (
         <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
               {this.props.title}
            </Text>
         </View>
      );
   }
}

const styles = {
   textStyle: {
      fontSize: 20
   },
   viewStyle: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f1f1f1',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 6,
   }
}
