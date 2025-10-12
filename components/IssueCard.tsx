import { View, Text, InteractionManager } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const colorCodeStatus: Record<string, string> = {
    'Pending': 'bg-yellow-100 text-yellow-500',
    'In Progress': 'bg-blue-100 text-blue-500',
    'Resolved': 'bg-green-100 text-green-500',
}

const iconMap: Record<string, string> = {
    'Road Maintenance': 'directions-car',
    'Waste Management': 'delete',
    'Public Safety': 'security',
    'Water Supply': 'water',
    'Parks and Recreation': 'park',
}

const IssueCard = ({ issue }: { issue: { title: string, department: string, status: string } }) => {
  return (
    <View className='flex-row gap-4 bg-white rounded-lg items-center p-2'>
        <View className='bg-blue-100 rounded-lg justify-center items-center h-10 w-10'>
            <MaterialIcons name={iconMap[issue.department]} size={24} color="#2563eb" />
        </View>
        <View className='flex-col flex-1 gap-1'>
            <Text className='text-md font-bold text-stone-800'>{issue.title}</Text>
            <Text className='text-xs text-stone-500'>{issue.department}</Text>
        </View>
        <View>
            <Text 
                className={`text-xs rounded-2xl p-1 ${colorCodeStatus[issue.status]}`}
            >
                {issue.status}
            </Text>
        </View>
    </View>
  )
}

export default IssueCard