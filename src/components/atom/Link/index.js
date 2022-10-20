import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';

export default function Link({title, size, align}) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
