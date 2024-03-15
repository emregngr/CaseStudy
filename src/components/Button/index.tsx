import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
  StyleSheet,
} from 'react-native';
import {responsive} from '../../utils/responsive';
import {theme} from '../../utils/theme';

export type ButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.5}
      style={[styles.button, props.containerStyle]}>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: responsive.number(56),
    borderRadius: responsive.number(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.colors.red,
  },
  text: {
    color: theme.colors.white,
    fontWeight: '600',
    fontSize: responsive.number(16),
    lineHeight: responsive.number(20),
  },
});
