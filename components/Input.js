import React, { Component } from 'react'
import { TextInput,StyleSheet } from 'react-native'

export class Input extends Component {
    render() {
        return (
            <TextInput {...this.props} style={{...styles.input}}>
                
            </TextInput>
        )
    }
};

const styles=StyleSheet.create({
    input:{
        height: 30,
        width:'80%',
        borderColor: 'black',
        borderWidth: 2,
        marginVertical: 10,
        textAlign: 'center'
    }
});

export default Input
