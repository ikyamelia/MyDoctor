import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Link} from '../../components';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

export default function UploadPhoto() {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Rizky Amelia</Text>
          <Text style={styles.position}>Mobile Developer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" size={16} align="center" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 64,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  position: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
