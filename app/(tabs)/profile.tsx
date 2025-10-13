import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import IssueCards from '@/components/IssueStats'
import Select from '@/components/Select'
import IssueCard from '@/components/IssueCard'
import { Link } from 'expo-router'
import { deptData, issueData, issueStatsData, statusData } from '@/services/data'

const profile = () => {
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    issueStatsData[0].value = 0;
    issueStatsData[1].value = 0;
    issueStatsData[2].value = 0;
  }, [department, status]);
  
  const shownData = issueData.filter(issue => department === '' || issue.department === department).filter(issue => status === '' || issue.status === status);

  shownData.forEach(issue => {
    if (issue.status === 'Pending') {
      issueStatsData[0].value += 1;
    } else if (issue.status === 'In Progress') {
      issueStatsData[1].value += 1;
    } else if (issue.status === 'Resolved') {
      issueStatsData[2].value += 1;
    }
  });

  return (
    <View className='m-2 flex-1'>
      <View>
        <Text
          className='text-2xl text-stone-800 font-bold'
        >
          My Issues
        </Text>
        <IssueCards data={issueStatsData}/>
      </View>
      <View className='mt-4 flex-row justify-between items-center'>
        <Text
          className='text-xl text-stone-800 font-bold'
        >
          All Issues
        </Text>
        <Select value={department} setValue={setDepartment} data={deptData} />
        <Select value={status} setValue={setStatus} data={statusData} />
      </View>
      <FlatList
        className='flex-1 mb-16 mt-2'
        data={shownData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={{ pathname: '/issue/[id]', params: { id: item.id, data: JSON.stringify(item) } }} asChild>
            <TouchableOpacity activeOpacity={0.7}>
              <IssueCard issue={item} />
            </TouchableOpacity>
          </Link>
        )}
        contentContainerStyle={{ gap: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default profile