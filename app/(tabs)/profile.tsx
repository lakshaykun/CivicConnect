import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import IssueCards from '@/components/IssueCards'
import Select from '@/components/Select'
import IssueCard from '@/components/IssueCard'

const dummyData = [
  { title: 'Pending', value: 3 },
  { title: 'In Progress', value: 5 },
  { title: 'Resolved', value: 10 },
]

const deptData = [
  { label: 'All Departments', value: '' },
  { label: 'Road Maintenance', value: 'Road Maintenance' },
  { label: 'Waste Management', value: 'Waste Management' },
  { label: 'Public Safety', value: 'Public Safety' },
  { label: 'Water Supply', value: 'Water Supply' },
  { label: 'Parks and Recreation', value: 'Parks and Recreation' },
];

const issueData = [
  { id: '1', title: 'Pothole on Main St', department: 'Road Maintenance', status: 'Pending' },
  { id: '2', title: 'Streetlight not working', department: 'Public Safety', status: 'In Progress' },
  { id: '3', title: 'Overflowing trash bin', department: 'Waste Management', status: 'Resolved' },
  { id: '4', title: 'Water leakage on 5th Ave', department: 'Water Supply', status: 'Pending' },
  { id: '5', title: 'Broken swing in park', department: 'Parks and Recreation', status: 'In Progress' },
  { id: '6', title: 'Graffiti on wall', department: 'Public Safety', status: 'Resolved' },
  { id: '7', title: 'Dead tree removal', department: 'Parks and Recreation', status: 'Pending' },
  { id: '8', title: 'Road sign missing', department: 'Road Maintenance', status: 'In Progress' },
  { id: '9', title: 'Water contamination issue', department: 'Water Supply', status: 'Resolved' },
  { id: '10', title: 'Illegal dumping site', department: 'Waste Management', status: 'Pending' },
]

const profile = () => {
  const [department, setDepartment] = useState('');
  return (
    <View className='m-2 flex-1'>
      <View>
        <Text
          className='text-2xl text-stone-800 font-bold'
        >
          My Issues
        </Text>
        <IssueCards data={dummyData}/>
      </View>
      <View className='mt-4 flex-row justify-between items-center'>
        <Text
          className='text-xl text-stone-800 font-bold'
        >
          All Issues
        </Text>
        <Select value={department} setValue={setDepartment} data={deptData} />
      </View>
      <FlatList
        className='flex-1 mb-16 mt-2'
        data={issueData.filter(issue => department === '' || issue.department === department)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <IssueCard issue={item} />
        )}
        contentContainerStyle={{ gap: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default profile