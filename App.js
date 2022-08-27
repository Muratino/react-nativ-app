import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Main } from './src/screens/Main';

//adb reverse tcp:8081  tcp:8081

const App = () => {
  return (
    <Main />
  );
};

export default App;
