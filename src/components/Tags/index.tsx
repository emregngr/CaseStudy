/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../utils/theme';
import {responsive} from '../../utils/responsive';
import {usePromotions} from '../../hooks';
import {TagType} from '../../providers/PromotionsProvider/types';
import Search from '../../assets/icons/Search.svg';
import {Tag} from '../index';

export const Tags: React.FC = () => {
  const {
    state: {tags},
    getTags,
  } = usePromotions();

  useEffect(() => {
    getTags();
  }, []);

  const rankedTags = tags?.sort(
    (a: TagType, b: TagType) => Number(a?.Rank) - Number(b?.Rank),
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <TouchableOpacity
        style={styles.searchContainer}
        activeOpacity={0.7}
        onPress={() => {}}>
        <View style={styles.searchIcon}>
          <Search />
        </View>
        <Text style={styles.searchText}>Fırsat Ara</Text>
      </TouchableOpacity>
      {rankedTags?.map((tag: TagType) => (
        <Tag key={tag?.Id} tag={tag} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: responsive.number(25),
  },
  contentContainerStyle: {
    paddingHorizontal: responsive.number(24),
  },
  searchContainer: {
    height: responsive.number(36),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsive.number(10),
    borderColor: theme.colors.dot,
    borderWidth: 1,
    marginLeft: responsive.number(5),
    paddingVertical: responsive.number(6),
    paddingRight: responsive.number(12),
  },
  searchIcon: {
    borderRadius: responsive.number(6),
    marginLeft: responsive.number(6),
  },
  searchText: {
    marginLeft: responsive.number(9),
  },
});
