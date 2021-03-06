import React from "react";
import { StyleSheet } from "react-native";

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'

import Routes from "./src/routes";

const App = () => {
  const [ loadedFonts ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!loadedFonts){
    return <AppLoading/>
  }

  return (
    <>
      <Routes/>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
