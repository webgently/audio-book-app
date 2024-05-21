import React from 'react';
import { CheckedIcon, UnCheckedIcon } from './icons';
import { TouchableOpacity } from 'react-native';

export const CheckBox = ({ selected, onPress, style }: any) => (
  <TouchableOpacity style={[{ flexDirection: 'row', alignItems: 'center' }, style]} onPress={onPress}>
    {selected ? <CheckedIcon line="#BBB1FA" bg="#4838D1" /> : <UnCheckedIcon color="#BBB1FA" />}
  </TouchableOpacity>
);
