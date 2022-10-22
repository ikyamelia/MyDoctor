import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, ListDoctor} from '../../components';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
} from '../../assets';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack('Doctor')}
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor1}
        name="Rizky Amelia"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor2}
        name="Aksara"
        desc="Pria"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor3}
        name="Jenny"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor4}
        name="Dian"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor5}
        name="Fadilah"
        desc="Pria"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
