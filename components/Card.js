import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card (props) {
    return (
      <View style={{...styles.card, ...props.style}}>
        {props.children}
      </View>
    );
};

const styles=StyleSheet.create({
    card:{
        shadowColor: 'black',
      shadowOffset:{
        width:0,
        height: 2
      },
      shadowRadius:5,
      shadowOpacity:0.26,
      backgroundColor: 'white',
      elevation:5,
      padding:20,
      borderRadius:10
    }
});