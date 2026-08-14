import { Stack } from 'expo-router';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true, shouldSetBadge: false, shouldShowBanner: true, shouldShowList: true
  }),
});

export default function Layout(){
  useEffect(()=>{ Notifications.requestPermissionsAsync(); },[]);
  return <Stack screenOptions={{headerShown:false}} />;
}