/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../utils/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Discover} from '../screens/Discover';
import {Portal} from '../screens/Portal';
import {Wallet} from '../screens/Wallet';
import {PromotionDetail} from '../screens/PromotionDetail';
import {Tab} from '../components';

export type BottomTabNavigatorParamList = {
  Discover: undefined;
  Portal: undefined;
  Wallet: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const MainNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <Tab {...props} />}>
      <BottomTab.Screen name="Discover" component={Discover} />
      <BottomTab.Screen name="Portal" component={Portal} />
      <BottomTab.Screen name="Wallet" component={Wallet} />
    </BottomTab.Navigator>
  );
};

export type RootStackNavigatorParamList = {
  MainNavigator: undefined;
  PromotionDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            presentation: 'containedTransparentModal',
            headerShown: false,
            animation: 'fade',
            contentStyle: {
              backgroundColor: theme.colors.white,
            },
          }}>
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
          <Stack.Screen
            name="PromotionDetail"
            component={PromotionDetail}
            options={{animation: 'slide_from_bottom'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
