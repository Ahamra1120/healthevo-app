import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './types';
import HomeScreen from '../screens/Dashboard/Home';
import NutritionTrackerScreen from '../screens/Dashboard/NutritionTracker';
import KMSScreen from '../screens/Dashboard/KMS';
import HealthTipsScreen from '../screens/Dashboard/HealthTips';
import ServicesScreen from '../screens/Dashboard/Services';
import ProfileScreen from '../screens/Dashboard/Profile';
import BottomTabBar from '../components/BottomTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const withSafeArea = (Component: React.ComponentType) => () =>
  (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <Component />
    </SafeAreaView>
  );

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}    >
      <Tab.Screen name="Home" component={withSafeArea(HomeScreen)} />
      <Tab.Screen name="NutritionTracker" component={withSafeArea(NutritionTrackerScreen)} />
      <Tab.Screen name="KMS" component={withSafeArea(KMSScreen)} />
      <Tab.Screen name="HealthTips" component={withSafeArea(HealthTipsScreen)} />
      <Tab.Screen name="Services" component={withSafeArea(ServicesScreen)} />
      <Tab.Screen name="Profile" component={withSafeArea(ProfileScreen)} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
});

export default BottomTabNavigator;
