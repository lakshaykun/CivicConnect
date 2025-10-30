import TabBarIcon from '@/components/TabBarIcon';
import { Tabs } from 'expo-router';
import Header from '@/components/Header';
import ProtectedRoute from '@/components/ProtectedRoutes';

export default function Layout() {
  return (
    <ProtectedRoute>
      <Tabs 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
              width: "100%",
              height: "100%",
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarStyle: {
              backgroundColor: '#ffffff',
              borderRadius: 50,
              marginHorizontal:20,
              marginBottom: 20,
              height: 52,
              position: 'absolute',
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: '#fefefe',
            }
          }}
      >
        <Tabs.Screen 
          name="dashboard" 
          options={{ 
            title: 'Dashboard', 
            header: () => <Header title="Dashboard" />,
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} title="Dashboard" />
            ) 
          }} />
        <Tabs.Screen 
          name="newpost" 
          options={{ 
            title: 'Post', 
            header: () => <Header title="New Post" />,
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} title="Post" />
            )
          }} />
        <Tabs.Screen 
          name="boards" 
          options={{ 
            title: 'Boards',
            header: () => <Header title="Boards" />,
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} title="Boards" />
            ) 
          }} />
        <Tabs.Screen 
          name="profile" 
          options={{ 
            title: 'Profile', 
            header: () => <Header title="Profile" />,
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} title="Profile" />
            ) 
          }} />
      </Tabs>
    </ProtectedRoute>
  )
}