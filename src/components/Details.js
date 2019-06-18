import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Button from './Button';

export default class Details extends Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.subContainer}>
               <Text style={{ fontSize: 16 }}>{this.props.data.title}</Text>
            </View>
            <View style={styles.subContainer}>
               <Image style={styles.image} source={{ uri: this.props.data.media }} />
            </View>
            <View style={styles.subContainer}>
               <Button click={() => Linking.openURL(this.props.data.url)}>
                  Sayfaya Git
               </Button>
            </View>
         </View>
      );
   }
}

const styles = {
   container: {
      borderWidth: 0,
      borderRadius: 2,
      borderColor: '#e8e8e8',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
      margin: 10,
      marginBottom: 0
   },
   subContainer: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#e8e8e8',
      position: 'relative'
   },
   image: {
      flex: 1,
      height: 220,
   }
}