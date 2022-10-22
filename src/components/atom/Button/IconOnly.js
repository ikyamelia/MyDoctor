import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBack, IconBackLight} from '../../../assets';

export default function IconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ArrowBack />;
    }
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    return <ArrowBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
