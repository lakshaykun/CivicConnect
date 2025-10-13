import { View, Text, FlatList } from 'react-native'
import React from 'react'


const IssueStats = ({data}: {data: any}) => {
  return (
    <FlatList
        horizontal
        data={data}
        className='justify-center'
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View className='rounded-lg bg-blue-100 justify-center items-center m-2 w-24 h-24'>
            <Text className='text-3xl font-bold text-blue-600'>{item.value}</Text>
            <Text className='text-sm text-stone-500'>{item.title}</Text>
          </View>
        )}
      />
  )
}

export default IssueStats