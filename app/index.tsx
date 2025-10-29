import { Text, Image, Dimensions, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { icons } from '@/constants/icons';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

const Index = () => {
  const { width } = Dimensions.get('window');
  const router = useRouter();
  const { user, userLoading } = useAuth();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Handle splash animation
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }).start();
      }, 1000);
    });
  }, [fadeAnim]);

  // Handle routing after animation + user check
  useEffect(() => {
    if (!userLoading) {
      const targetRoute = user ? '/user/(tabs)/dashboard' : '/login';
      const delay = 1800; // small delay for fade out
      const timer = setTimeout(() => {
        router.replace(targetRoute);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [userLoading, user]);


  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        opacity: fadeAnim,
      }}
    >
      <Image
        style={{
          width: width * 0.5,
          height: width * 0.5,
        }}
        resizeMode="cover"
        source={icons.logo}
      />
      <Text className="my-10 pb-10 font-bold text-stone-700 text-md text-center">
        Your City, Your Voice — Let’s Keep It Clean!
      </Text>
    </Animated.View>
  );
};

export default Index;
