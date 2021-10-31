import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/index';

function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App;