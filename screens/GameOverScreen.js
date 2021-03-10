import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <Text>Number of Rounds: {props.guessRounds}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart}/>
     </View>
  );
};

const styles=StyleSheet.create({
screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}
});
