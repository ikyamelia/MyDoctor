import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';

export default function Messages() {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Aksara Ananta Rizky',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Alinea Ananda Rizky',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'Rizky Fadilah',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.message}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <ListDoctor
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
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
