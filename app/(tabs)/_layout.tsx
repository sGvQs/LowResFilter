import { Tabs } from 'expo-router';

import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1500ff',
        headerStyle: {
          backgroundColor: '#3b6ea5',
        },
        headerShadowVisible: false,
        headerTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#d4d0c7',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: '🏠 Home',
          tabBarIcon: ({ color }) => (
            <Entypo name={'home'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="photo"
        options={{
          title: 'Photo',
          headerTitle: '📷 Photo',
          tabBarIcon: ({ color }) => (
            <Entypo name={'folder-images'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: 'Video',
          headerTitle: '📹 Video',
          tabBarIcon: ({ color }) => (
            <Entypo name={'folder-video'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerTitle: '💁‍♀️ About',
          tabBarIcon: ({ color }) => (
            <Entypo name={'info-with-circle'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
