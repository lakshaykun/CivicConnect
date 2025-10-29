import { View, Text, FlatList, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import IssueCards from '@/components/IssueStats';
import Select from '@/components/Select';
import IssueCard from '@/components/IssueCard';
import { Link } from 'expo-router';
import { deptData, issueData, statusData } from '@/services/data';
import { useAuth } from '@/context/AuthContext';

const Profile = () => {
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');
  const { user, logout } = useAuth();

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedName, setEditedName] = useState(user?.name || '');
  const [editedCity, setEditedCity] = useState(user?.city || '');

  const shownData = issueData
    .filter(issue => department === '' || issue.department === department)
    .filter(issue => status === '' || issue.status === status);

  const handleSave = () => {
    // Update user in context if desired:
    // setUser((prev) => prev ? { ...prev, name: editedName, city: editedCity } : prev);
    setEditModalVisible(false);
  };

  return (
    <View className='m-2 flex-1'>
      {/* Header */}
      <View>
        <View className='flex-row justify-between items-center'>
          <Text className='text-2xl text-stone-800 font-bold'>My Issues</Text>
          <View className='flex-row gap-5'>
            <TouchableOpacity
              onPress={() => {
                setEditedName(user?.name || '');
                setEditedCity(user?.city || '');
                setEditModalVisible(true);
              }}
              className='mt-3 bg-indigo-500 self-start px-4 py-2 rounded-xl'
              activeOpacity={0.8}
            >
              <Text className='text-white font-medium'>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={logout}
              className='mt-3 bg-red-500 self-start px-4 py-2 rounded-xl'
              activeOpacity={0.8}
            >
              <Text className='text-white font-medium'>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <IssueCards data={shownData} />
      </View>

      {/* Filters */}
      <View className='mt-4 flex-row justify-between items-center'>
        <Text className='text-xl text-stone-800 font-bold'>All Issues</Text>
        <View className='flex-row gap-7'>
          <Select value={department} setValue={setDepartment} data={deptData} width={220} />
          <Select value={status} setValue={setStatus} data={statusData} width={95} />
        </View>
      </View>

      {/* Issues List */}
      <FlatList
        className='flex-1 mb-16 mt-2'
        data={shownData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: '/user/issue/[id]', params: { id: item.id, data: JSON.stringify(item) } }}
            asChild
          >
            <TouchableOpacity activeOpacity={0.7}>
              <IssueCard issue={item} />
            </TouchableOpacity>
          </Link>
        )}
        contentContainerStyle={{ gap: 8 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Smooth Bottom Sheet Modal */}
      <Modal
        isVisible={editModalVisible}
        onBackdropPress={() => setEditModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setEditModalVisible(false)}
        useNativeDriverForBackdrop
        backdropTransitionOutTiming={0}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View className='bg-white rounded-t-3xl p-6'>
          <View className='h-1 w-16 bg-gray-300 rounded-full self-center mb-4' />

          <Text className='text-xl font-bold text-stone-800 mb-4'>Edit Profile</Text>

          <Text className='text-stone-700 mb-1'>Name</Text>
          <TextInput
            value={editedName}
            onChangeText={setEditedName}
            className='border border-stone-300 rounded-lg px-3 py-2 mb-3'
            placeholder='Enter your name'
          />

          <Text className='text-stone-700 mb-1'>City</Text>
          <TextInput
            value={editedCity}
            onChangeText={setEditedCity}
            className='border border-stone-300 rounded-lg px-3 py-2 mb-5'
            placeholder='Enter your city'
          />

          <View className='flex-row justify-end gap-3'>
            <Pressable
              onPress={() => setEditModalVisible(false)}
              className='px-4 py-2 rounded-lg bg-gray-200'
            >
              <Text className='text-stone-700 font-medium'>Cancel</Text>
            </Pressable>

            <Pressable
              onPress={handleSave}
              className='px-4 py-2 rounded-lg bg-indigo-500'
            >
              <Text className='text-white font-medium'>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
