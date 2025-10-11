import { View, Text, Image, Dimensions, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { icons } from '@/constants/icons';
import { useRouter } from 'expo-router';

const index = () => {
  const { width } = Dimensions.get('window');
  const route = useRouter();

  // Create a fade animation value
  const fadeAnim = useRef(new Animated.Value(0)).current; // Start invisible

  useEffect(() => {
    // Step 1: Fade In
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // 1 sec fade-in
      useNativeDriver: true,
    }).start(() => {
      // Step 2: Wait briefly, then Fade Out
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 800, // 0.8 sec fade-out
          useNativeDriver: true,
        }).start(() => {
          // Step 3: Navigate after fade-out
          route.replace('/dashboard');
        });
      }, 1000);
    });
  }, [fadeAnim, route]);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        opacity: fadeAnim, // Controlled by animation
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

export default index;
