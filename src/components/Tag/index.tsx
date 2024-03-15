import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../utils/theme';
import {responsive} from '../../utils/responsive';
import FastImage from 'react-native-fast-image';
import {TagType} from '../../providers/PromotionsProvider/types';

export type TagProps = {
  tag: TagType;
};

export const Tag: React.FC<TagProps> = ({tag}) => {
  const {IconUrl, Name} = tag || {};
  return (
    <TouchableOpacity style={styles.tagContainer} onPress={() => {}}>
      <FastImage source={{uri: IconUrl}} style={styles.tagIcon} />
      <Text style={styles.tagText}>{Name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: responsive.number(25),
  },
  tagContainer: {
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
  tagIcon: {
    width: responsive.number(24),
    height: responsive.number(24),
    borderRadius: responsive.number(6),
    marginLeft: responsive.number(6),
  },
  tagText: {
    marginLeft: responsive.number(9),
  },
});
