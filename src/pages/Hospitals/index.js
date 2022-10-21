import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILHospitalBG} from '../../assets';
import {colors, fonts} from '../../utils';
import {ListHospital} from '../../components';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Nearby Hospitals</Text>
          <Text style={styles.desc}>3 Tersedia</Text>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    width: 360,
    padding: 30,
  },
  textWrapper: {
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
