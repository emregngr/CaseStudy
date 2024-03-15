import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {responsive} from '../../utils/responsive';
import {theme} from '../../utils/theme';
import DiscoverActiveIcon from '../../assets/icons/tab/discover-active.svg';
import DiscoverInActiveIcon from '../../assets/icons/tab/discover-inactive.svg';
import PortalActiveIcon from '../../assets/icons/tab/portal-active.svg';
import PortalInActiveIcon from '../../assets/icons/tab/portal-inactive.svg';
import WalletActiveIcon from '../../assets/icons/tab/wallet-active.svg';
import WalletInActiveIcon from '../../assets/icons/tab/wallet-inactive.svg';

const Touchable =
  Platform.OS === 'android'
    ? TouchableNativeFeedback
    : TouchableWithoutFeedback;

export type TabProps = {
  state: {
    index: number;
  };
  navigation: any;
};

export type TabButtonProps = {
  icon: JSX.Element;
  text?: string;
  active: boolean;
  onPress: () => void;
};

export const Tab: React.FC<TabProps> = ({state, navigation}) => {
  const {index: currentIndex = 0} = state || {};

  const handlePress = (route: any) => {
    navigation.navigate(route);
  };

  return (
    <View style={[styles.container]}>
      <TabButton
        onPress={() => handlePress('Discover')}
        text={'KEŞFET'}
        icon={
          currentIndex === 0 ? <DiscoverActiveIcon /> : <DiscoverInActiveIcon />
        }
        active={currentIndex === 0}
      />
      <TabButton
        onPress={() => handlePress('Portal')}
        icon={
          currentIndex === 1 ? <PortalActiveIcon /> : <PortalInActiveIcon />
        }
        active={currentIndex === 1}
      />
      <TabButton
        onPress={() => handlePress('Wallet')}
        text={'DAHA CÜZDAN'}
        icon={currentIndex === 2 ? <WalletActiveIcon /> : <WalletInActiveIcon />}
        active={currentIndex === 2}
      />
    </View>
  );
};

const TabButton: React.FC<TabButtonProps> = ({icon, text, active, onPress}) => {
  const {bottom} = useSafeAreaInsets();
  const containerStyle = {
    paddingBottom: bottom === 0 ? responsive.number(10) : bottom,
  };

  return (
    <Touchable
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(theme.colors.primary, false)}>
      <View style={[styles.buttonContainer, containerStyle]}>
        <View>{icon}</View>
        <Text
          style={[
            styles.tabText,
            {color: active ? theme.colors.black : theme.colors.gray},
          ]}>
          {text}
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: responsive.number(80),
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: responsive.number(20),
    borderTopRightRadius: responsive.number(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: responsive.number(15),
  },
  tabText: {
    marginTop: responsive.number(10),
    fontWeight: '700',
    fontSize: responsive.number(10),
    lineHeight: responsive.number(12),
  },
});
