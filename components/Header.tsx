import { View, Text } from 'react-native';

export default function Header({ title }: { title: string }) {

  return (
    <View className='bg-[#fefefe] h-[8vh] flex-row pb-2 items-end justify-center border-b-[1px] border-b-stone-300' >
      <Text className='text-stone-800 text-xl font-bold' >
        {title}
      </Text>
      <View style={{ width: 24 }} />
    </View>
  );
}
