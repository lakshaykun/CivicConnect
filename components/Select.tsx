import React, { useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export default function Select({value, setValue, data}: {value: string, setValue: (value: string) => void, data: {label: string, value: string}[]}) {
  return (
    <View>
      <Dropdown
        style={{
          backgroundColor: '#dbeafe',
          borderRadius: 10,
          paddingVertical: 6,
          paddingHorizontal: 8
        }}
        placeholderStyle={{ color: '#000000', fontSize: '0.8rem' }}
        selectedTextStyle={{ color: '#292524', fontSize: '0.8rem' }}
        data={data}
        labelField="label"
        valueField="value"
        placeholder=""
        value={value}
        onChange={(item) => setValue(item.value)}
      />
    </View>
  );
}