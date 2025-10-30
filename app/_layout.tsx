import { Stack } from 'expo-router';
import '../global.css';
import { AuthProvider } from '@/context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <AuthProvider>
      <SafeAreaView className="flex-1 bg-[#f2f2f2]">
        <Stack
          screenOptions={{ headerShown: false }}
        />
      </SafeAreaView>
    </AuthProvider>
  );
}
