import React from 'react';
import AppNavigationContainer from './src/router/AppNavigationContainer'
import {SafeAreaView} from 'react-native';

import AppProvider from './src/context/AppContext'

function App(){
  return (
    <AppProvider>
      <AppNavigationContainer/>
    </AppProvider>
  )
};

export default App;
