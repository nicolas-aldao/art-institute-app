/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/components/pages/Home/index';
import { ArtworkDetailScreen } from './src/components/pages/ArtworkDetail/index';
import { FavoritesScreen } from './src/components/pages/FavoritesScreen/index';
import { useGetSetLikesFromStorage } from './src/hooks/useGetSetLikesFromStorage';

const Stack = createNativeStackNavigator();
export const ArtContext = createContext([]);

function App(): React.JSX.Element {
  const { likesArrayFromStorage } = useGetSetLikesFromStorage();
  const [likesArray, setLikesArray] = useState<string[]>([])

  useEffect(() => {
    setLikesArray(likesArrayFromStorage);
  }, [likesArrayFromStorage])

  return (
    <ArtContext.Provider value={{ likesArray, setLikesArray }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ArtworkDetail"
            component={ArtworkDetailScreen}
            options={{
              title: '',
              headerTransparent: true,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ArtContext.Provider>
  );
}

export default App;
