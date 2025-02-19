import { Tabs } from 'expo-router';

import Entypo from '@expo/vector-icons/Entypo';
import { Platform } from 'react-native';
import { ColorsType } from '@/utils/types/ColorsType';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ColorsType.shock_blue,
        tabBarInactiveTintColor: ColorsType.black,
        headerStyle: {
          backgroundColor: ColorsType.backgrond_blue,
        },
        headerShadowVisible: false,
        headerTintColor: ColorsType.white,
        tabBarStyle: {
          backgroundColor: ColorsType.modal_background,
          paddingHorizontal: Platform.OS === 'web' ? 10 : 0, // Web のみ余白をつける
          borderWidth: 6,
          borderTopWidth: 6,
          borderRightColor: ColorsType.modal_shadow_black,
          borderBottomColor: ColorsType.modal_shadow_black,
          borderTopColor: ColorsType.modal_shadow_white,
          borderLeftColor: ColorsType.modal_shadow_more_white,
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: Platform.OS === 'web' ? 'flex-start' : 'center',
          maxWidth: Platform.OS === 'web' ? 100 : 'auto',
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
