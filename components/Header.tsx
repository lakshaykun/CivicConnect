import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Header({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View className='bg-[#fefefe] h-[10vh] flex-row pb-2 items-end justify-center' >
      <Text className='text-stone-800 text-xl font-bold' >
        {title}
      </Text>
      <View style={{ width: 24 }} /> {/* Placeholder for symmetry */}
    </View>
  );
}
