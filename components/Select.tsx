import React from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export default function Select({
  value,
  setValue,
  data,
  width = 120,
}: {
  value: string;
  setValue: (value: string) => void;
  data: { label: string; value: string }[];
  width?: number;
}) {
  return (
    <View className=''>
      <Dropdown
        style={{
          backgroundColor: '#dbeafe',
          borderRadius: 10,
          paddingVertical: 6,
          paddingHorizontal: 8,
        }}
        containerStyle={{
          width: width,
          borderRadius: 10,
        }}
        maxHeight={250} 
        placeholderStyle={{ color: '#000000', fontSize: 13 }}
        selectedTextStyle={{ color: '#292524', fontSize: 13 }}
        itemTextStyle={{ fontSize: 13 }}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select..."
        value={value}
        onChange={(item) => setValue(item.value)}
      />
    </View>
  );
}
