import { View, Text, FlatList } from 'react-native'
import React from 'react'


const IssueStats = ({data}: {data: any}) => {
  const issueStatsData = [
    { title: 'Pending', value: 0 },
    { title: 'In Progress', value: 0 },
    { title: 'Resolved', value: 0 },
  ]
  
  issueStatsData.forEach(stat => {
    const matchingIssues = data.filter((issue: any) => issue.status === stat.title)
    stat.value = matchingIssues.length
  })

  return (
    <FlatList
        horizontal
        data={issueStatsData}
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