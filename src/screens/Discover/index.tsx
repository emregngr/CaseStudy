import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../utils/theme';
import {Header, Tags, Promotions} from '../../components';

export const Discover: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <Tags />
        <Promotions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
