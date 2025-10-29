import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const colorCodeStatus: Record<string, string> = {
    'Pending': 'bg-yellow-100 text-yellow-500',
    'In Progress': 'bg-blue-100 text-blue-500',
    'Resolved': 'bg-green-100 text-green-500',
};

const IssueDetail = () => {
  const { data } = useLocalSearchParams();
  const issue = data ? JSON.parse(data as string) : null;

  return (
    <View className='h-full w-full p-2'>
      <View className='bg-white p-2 rounded-lg shadow-sm'>
        <Text className='text-xl font-semibold'>{issue?.title}</Text>
        <View className='flex-row justify-between items-center mr-2'>
          <Text className='text-sm text-gray-600 mt-1'>Department: {issue?.department}</Text>
          <Text className='text-sm text-gray-600 mt-1'>Location: {issue?.location}</Text>
        </View>
        <Image source={{ uri: issue?.image }} className='w-full h-48 mt-2 rounded-lg' />
        <Text className='text-gray-700 mt-2'>{issue?.description}</Text>
      </View>
      <View className='mt-4 bg-white p-2 rounded-lg shadow-sm'>
        <View className='flex-row justify-between'>
          <Text className='text-lg font-semibold mb-2'>Status</Text>
          <Text 
              className={`text-xs px-4 h-6 items-center justify-center rounded-2xl p-1 ${colorCodeStatus[issue.status]}`}
          >
              {issue.status}
          </Text>
        </View>
        <Text className='text-gray-700'>{issue.progressComment}</Text>
      </View>
    </View>
  )
}

export default IssueDetail