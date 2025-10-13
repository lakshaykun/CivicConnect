import { View, Text, InteractionManager } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { issueIconMap } from '@/constants/icons'
import { colorCodeStatus } from '@/constants/colorCode'

const IssueCard = ({ issue }: { issue: { title: string, department: string, status: string } }) => {
  return (
    <View className='flex-row w-full gap-4 bg-white rounded-lg items-center p-2'>
        <View className='bg-blue-100 rounded-lg justify-center items-center h-10 w-10'>
            <MaterialIcons name={issueIconMap[issue.department]} size={24} color="#2563eb" />
        </View>
        <View className='flex-col flex-1 gap-1'>
            <Text className='text-md font-bold text-stone-800'>{issue.title}</Text>
            <Text className='text-xs text-stone-500'>{issue.department}</Text>
        </View>
        <View>
            <Text 
                className={`text-xs px-3 h-6 items-center justify-center rounded-2xl p-1 ${colorCodeStatus[issue.status]}`}
            >
                {issue.status}
            </Text>
        </View>
    </View>
  )
}

export default IssueCard