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
          padding: 6,
        }}
        placeholderStyle={{ color: '#000000' }}
        selectedTextStyle={{ color: '#292524' }}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select Department"
        value={value}
        onChange={(item) => setValue(item.value)}
      />
    </View>
  );
}