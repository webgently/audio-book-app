import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Containers from './src/containers';
import getStarted from './src/containers/getStarted';

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="initial">
        <Stack.Screen name="initial" component={Containers} options={{ headerShown: false }} />
        <Stack.Screen name="get_started" component={getStarted} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
