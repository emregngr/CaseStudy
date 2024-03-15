/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  Animated,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {theme} from '../../utils/theme';
import {responsive} from '../../utils/responsive';
import {usePromotions} from '../../hooks';
import {PromotionType} from '../../providers/PromotionsProvider/types';
import {Promotion} from '../index';

export type DotProps = {
  promotion: PromotionType;
  active: boolean;
};

export const Promotions: React.FC = () => {
  const {
    state: {promotions},
    getPromotions,
  } = usePromotions();
  const [currentDot, setCurrentDot] = useState<number>(0);

  useEffect(() => {
    getPromotions();
  }, []);

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newPage = event.nativeEvent.contentOffset.x / responsive.deviceWidth;
    setCurrentDot(Math.ceil(newPage));
  };

  const scrollX = useRef(new Animated.Value(0)).current;
  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {x: scrollX},
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  return (
    <>
      <View style={styles.wrapper}>
        <Animated.ScrollView
          bounces={false}
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          disableIntervalMomentum
          decelerationRate="fast"
          snapToInterval={responsive.deviceWidth - responsive.number(44)}
          snapToAlignment="start"
          onScroll={handleScroll}
          onMomentumScrollEnd={onScrollEnd}>
          {promotions?.map((promotion: PromotionType, index: number) => (
            <Promotion
              key={promotion?.Id}
              promotion={promotion}
              active={index === currentDot}
            />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={styles.dotContainer}>
        {promotions?.map((promotion: PromotionType, index: number) => (
          <Dot
            key={promotion?.Id}
            promotion={promotion}
            active={index === currentDot}
          />
        ))}
      </View>
    </>
  );
};

const Dot: React.FC<DotProps> = ({promotion, active}) => {
  return (
    <Animated.View
      style={[
        styles.dot,
        {
          width: active ? responsive.number(19) : responsive.number(8),
          backgroundColor: active
            ? promotion?.PromotionCardColor
            : theme.colors.dot,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: responsive.number(385),
    width: responsive.deviceWidth,
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingLeft: responsive.number(12),
    paddingRight: responsive.number(24),
    paddingBottom: responsive.number(24),
  },
  dotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: responsive.number(15),
  },
  dot: {
    height: responsive.number(8),
    borderRadius: 20,
    marginHorizontal: responsive.number(4),
  },
});
