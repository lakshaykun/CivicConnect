import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

interface props {
    focused: boolean;
    title: keyof typeof TabBarIcons;
};

const TabBarIcons = {
    "Dashboard": "home",
    "Post": "post-add",
    "Boards": "apartment",
    "Profile": "person",
} as const;

const TabBarIcon = ({ focused, title }: props) => {
  return (
    <View className='justify-center items-center'>
        <MaterialIcons className='pt-2' name={TabBarIcons[title]} size={24} color={focused ? '#3b82f6' : '#6b7280'} />
        <Text className={`text-[10px] ${focused ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>{title}</Text>
    </View>
  )
}

export default TabBarIcon