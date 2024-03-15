import React from 'react';
import {AppNavigator} from './src/navigation/AppNavigator';
import {StatusBar} from 'react-native';
import {Providers} from './src/providers';

export const App: React.FC = () => {
  return (
    <Providers>
      <>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <AppNavigator />
      </>
    </Providers>
  );
};
