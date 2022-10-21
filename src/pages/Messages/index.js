import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';

export default function Messages() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.message}>Messages</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  message: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    marginTop: 30,
    marginLeft: 16,
  },
});
