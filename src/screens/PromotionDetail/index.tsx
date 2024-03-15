/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../utils/theme';
import {usePromotions} from '../../hooks';
import FastImage from 'react-native-fast-image';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from '../../components';
import {responsive} from '../../utils/responsive';
import dayjs from 'dayjs';
import HTMLView from 'react-native-htmlview';
import BackButton from '../../assets/icons/BackButton.svg';

export const PromotionDetail: React.FC<any> = ({route}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {Id} = route?.params;
  const {
    state: {promotionLoading, promotion},
    getPromotion,
  } = usePromotions();
  const {
    ImageUrl,
    BrandIconUrl,
    EndDate,
    Title,
    Description,
    DetailButtonText,
  } = promotion || {};
  const today = dayjs().format('YYYY-MM-DD');

  useEffect(() => {
    getPromotion(Id);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {promotionLoading ? (
        <ActivityIndicator size="large" color={theme.colors.red} />
      ) : (
        <>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.pop()}>
            <BackButton />
          </TouchableOpacity>
          <ScrollView
            bounces={false}
            style={styles.scroll}
            contentContainerStyle={styles.contentContainerStyle}>
            <FastImage style={styles.image} source={{uri: ImageUrl}} />
            <FastImage style={styles.brandIcon} source={{uri: BrandIconUrl}} />
            <View style={styles.remainingContainer}>
              <Text style={styles.remainingText}>
                Son {dayjs(EndDate).diff(today, 'day')} Gün
              </Text>
            </View>
            <View style={styles.textContainer}>
              <HTMLView value={Title} stylesheet={titleStyles} />
              <HTMLView value={Description} stylesheet={descriptionStyles} />
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button text={DetailButtonText} onPress={() => {}} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  scroll: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: responsive.number(24),
  },
  backButton: {
    position: 'absolute',
    top: responsive.number(100),
    left: responsive.number(15),
    zIndex: 1,
  },
  image: {
    height: responsive.number(305),
    width: responsive.deviceWidth,
    marginTop: responsive.number(5),
    borderRadius: responsive.number(16),
    borderBottomLeftRadius: responsive.number(100),
  },
  brandIcon: {
    height: responsive.number(55),
    width: responsive.number(55),
    position: 'absolute',
    top: responsive.number(260),
    left: responsive.number(10),
  },
  remainingContainer: {
    position: 'absolute',
    top: responsive.number(270),
    right: responsive.number(20),
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
  textContainer: {
    marginTop: responsive.number(15),
    paddingHorizontal: responsive.number(24),
  },
  buttonContainer: {
    paddingVertical: responsive.number(10),
    paddingHorizontal: responsive.number(24),
  },
});

const titleStyles = StyleSheet.create({
  p: {
    color: theme.colors.black,
    fontWeight: '700',
    fontSize: responsive.number(26),
    lineHeight: responsive.number(30),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const descriptionStyles = StyleSheet.create({
  p: {
    color: theme.colors.black,
    fontWeight: '400',
    fontSize: responsive.number(14),
    lineHeight: responsive.number(22),
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: responsive.number(15),
  },
});
