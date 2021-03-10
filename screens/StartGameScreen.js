import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, Alert } from 'react-native'
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

export default function StartGameScreen (props) {
    const [enteredValue, setEnteredValue]=useState('');
    const [confirmed, setConfirmed]=useState(false);
    const [selectedNumber, setSelectedNumber]=useState();

    const numberInputHandler=inputText=>{
      setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };

    const resetInputHandler=()=>{
      setEnteredValue('');
      setConfirmed(false);
    }

    const confirmInputHandler=()=>{
      const chosenNumber=parseInt(enteredValue);
      if(isNaN(chosenNumber) || chosenNumber<=0|| chosenNumber>99){
        Alert.alert("Invalid Input","Number has to be a number between 1 and 99",[{text:"Okay",style:'destructive', onPress: resetInputHandler}])
        return;
      }
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue('');
      Keyboard.dismiss();
    };

    let confirmedOutput;
    if(confirmed){
      confirmedOutput=(
        <Card style={styles.summaryContainer}>
          <Text>You Selected </Text>
          <NumberContainer>
            {selectedNumber}
          </NumberContainer>
          <Button title="START GAME" onPress={()=>props.onStartGame(selectedNumber)}/>
        </Card>
      )}

    return (
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss}}>
        <View style={styles.screen}>
        <Text style={styles.title}> Start a new Game </Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input 
            blurOnSubmit 
            autoCapitalize='none' 
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
            style={styles.input}/>
          <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/>
          </View>
          <View style={styles.button}>
          <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
          </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
      </TouchableWithoutFeedback>
    )
  
};

const styles=StyleSheet.create({
  button:{
    flex:1,
    paddingHorizontal: 15
  },
  summaryContainer:{
    margin:20,
    alignItems: 'center'
  },
  input:{
    width:50
  },
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center'
    },
    title:{
      fontSize:20,
      marginVertical: 10,
      fontFamily: 'open-sans-bold'
    },
    buttonContainer:{
      flexDirection:'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal:15
    },
    inputContainer:{
      width:'100%',
      alignItems:'center',
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