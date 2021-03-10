import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
//delays start of the app until any promise returning methods complete.

const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [userNumber, setUserNumber]=useState();
  const [guessRounds, setGuessRounds]=useState(0);
  const [dataLoaded, setDataLoaded]=useState(false);

  //Do not load any other content if data is still being fetched.
  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} 
              onFinish={()=>setDataLoaded(true)}
                onError={error=>console.log(error)}
              />
    //supply startAsync function that is to be waited for
    //supply an onFinish to proceed with normal flow
  }

  const configureNewGameHandler= ()=>{
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler=(selectedNumber)=>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler=(numberOfRounds)=>{
    setGuessRounds(numberOfRounds);
  }

  let content=<StartGameScreen onStartGame={startGameHandler}/>
  if(userNumber && guessRounds<= 0){
    content=<GameScreen onGameOver={gameOverHandler} userChoice={userNumber}/>
  }else if(guessRounds>0){
    content = <GameOverScreen onRestart={configureNewGameHandler} userNumber={userNumber} guessRounds={guessRounds}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex : 1
  }
});
