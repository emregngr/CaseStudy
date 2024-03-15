import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import DahaDaha from '../../assets/icons/DahaDaha.svg';
import Profile from '../../assets/icons/Profile.svg';
import {theme} from '../../utils/theme';
import {responsive} from '../../utils/responsive';

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <DahaDaha />
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
          <Text style={styles.loginText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileContainer} onPress={() => {}}>
          <Profile />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsive.number(24),
    paddingVertical: responsive.number(20),
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: theme.colors.red,
    padding: responsive.number(15),
    borderRadius: responsive.number(50),
  },
  loginText: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: responsive.number(12),
    lineHeight: responsive.number(14),
  },
  profileContainer: {
    marginLeft: responsive.number(10),
    backgroundColor: theme.colors.black,
    padding: responsive.number(15),
    borderRadius: responsive.number(50),
  },
});
