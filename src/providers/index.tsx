import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {PromotionsProvider} from './PromotionsProvider';
import {theme} from '../utils/theme';

export type Props = {
  children: JSX.Element;
};

export const Providers = ({children}: Props) => {
  return (
    <PromotionsProvider>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </PaperProvider>
    </PromotionsProvider>
  );
};
