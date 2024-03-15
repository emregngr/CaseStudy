import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {theme} from '../../utils/theme';
import {responsive} from '../../utils/responsive';
import FastImage from 'react-native-fast-image';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import HTMLView from 'react-native-htmlview';
import dayjs from 'dayjs';
import {PromotionType} from '../../providers/PromotionsProvider/types';

export type PromotionProps = {
  promotion: PromotionType;
  active: boolean;
};

export const Promotion: React.FC<PromotionProps> = ({promotion, active}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {Id, ImageUrl, BrandIconUrl, RemainingText, Title, PromotionCardColor} =
    promotion || {};
  const today = dayjs().format('YYYY-MM-DD');

  const replaceRemainingText = RemainingText.replace(/\./g, '-');
  const splitRemainingText = replaceRemainingText?.split('-');
  const formattedRemainingText =
    splitRemainingText[2] +
    '-' +
    splitRemainingText[1] +
    '-' +
    splitRemainingText[0];

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {height: active ? responsive.number(365) : responsive.number(325)},
      ]}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('PromotionDetail', {Id});
      }}>
      <FastImage style={styles.image} source={{uri: ImageUrl}} />
      <FastImage style={styles.brandIcon} source={{uri: BrandIconUrl}} />
      <View style={styles.remainingContainer}>
        <Text style={styles.remainingText}>
          Son {dayjs(formattedRemainingText).diff(today, 'day')} Gün
        </Text>
      </View>
      {active ? (
        <>
          <View style={styles.titleContainer}>
            <HTMLView value={Title} stylesheet={titleStyles} />
          </View>
          <Text style={[styles.dahaDahaText, {color: PromotionCardColor}]}>
            Daha Daha
          </Text>
        </>
      ) : null}
      <View style={styles.bottomShapeContainer}>
        <View
          style={[styles.bottomShape1, {borderLeftColor: PromotionCardColor}]}
        />
        <View
          style={[styles.bottomShape2, {borderRightColor: PromotionCardColor}]}
        />
        <View
          style={[styles.bottomShape3, {backgroundColor: PromotionCardColor}]}
        />
        <View
          style={[styles.bottomShape4, {borderRightColor: PromotionCardColor}]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    width: responsive.number(305),
    marginLeft: responsive.number(12),
    borderRadius: responsive.number(16),
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: {
    height: responsive.number(245),
    width: responsive.number(295),
    marginTop: responsive.number(5),
    borderRadius: responsive.number(16),
    borderBottomLeftRadius: responsive.number(100),
  },
  brandIcon: {
    height: responsive.number(55),
    width: responsive.number(55),
    position: 'absolute',
    top: responsive.number(205),
    left: responsive.number(15),
  },
  remainingContainer: {
    position: 'absolute',
    top: responsive.number(215),
    right: responsive.number(10),
    backgroundColor: theme.colors.black,
    borderRadius: responsive.number(50),
    paddingVertical: responsive.number(6),
    paddingHorizontal: responsive.number(10),
  },
  remainingText: {
    color: theme.colors.white,
    fontWeight: '400',
    fontSize: responsive.number(15),
    lineHeight: responsive.number(17),
  },
  titleContainer: {
    marginTop: responsive.number(15),
    paddingHorizontal: responsive.number(30),
  },
  dahaDahaText: {
    fontWeight: '700',
    fontSize: responsive.number(14),
    lineHeight: responsive.number(16),
    marginTop: responsive.number(15),
    alignSelf: 'center',
  },
  bottomShapeContainer: {
    position: 'absolute',
    bottom: responsive.number(-15),
  },
  bottomShape1: {
    position: 'absolute',
    bottom: responsive.number(10),
    left: responsive.number(-12),
    borderTopWidth: responsive.number(15),
    borderLeftWidth: responsive.number(20),
    borderTopColor: 'transparent',
    borderBottomLeftRadius: responsive.number(100),
  },
  bottomShape2: {
    position: 'absolute',
    bottom: responsive.number(0),
    right: responsive.number(-12),
    borderTopWidth: responsive.number(25),
    borderRightWidth: responsive.number(30),
    borderTopColor: 'transparent',
    borderBottomLeftRadius: responsive.number(100),
    borderBottomRightRadius: responsive.number(100),
  },
  bottomShape3: {
    height: responsive.number(4),
    width: responsive.number(280),
  },
  bottomShape4: {
    borderBottomWidth: responsive.number(10),
    borderRightWidth: responsive.number(280),
    borderBottomColor: 'transparent',
    borderBottomRightRadius: responsive.number(100),
  },
});

const titleStyles = StyleSheet.create({
  p: {
    color: theme.colors.black,
    fontWeight: '700',
    fontSize: responsive.number(14),
    lineHeight: responsive.number(20),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
