import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import MainContainer from './navigation/MainContainer';

function App() {
  useEffect(
    ()=>{
      SplashScreen.hide();
    },[] 
  )
  return (
    <MainContainer/>
  );
}

export default App;