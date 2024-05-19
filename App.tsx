import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Containers from './src/containers';
import getStarted from './src/containers/getStarted';

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen name="Initial" component={Containers} />
        <Stack.Screen name="get_started" component={getStarted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
