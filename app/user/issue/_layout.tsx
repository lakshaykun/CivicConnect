import { Stack } from 'expo-router';
import Header from '@/components/Header';

export default function Layout() {
  return <Stack
    screenOptions={{
      header: () => <Header title="Issue Details" />,
    }}
  />;
}
