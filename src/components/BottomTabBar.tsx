import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles/BottomTabBar';

interface BottomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const getTabIcon = (routeName: string, isFocused: boolean) => {
    let icon = '';
    
    switch (routeName) {
      case 'Home':
        icon = '🏠';
        break;
      case 'NutritionTracker':
        icon = '🍎';
        break;
      case 'HealthTips':
        icon = '💡';
        break;
      case 'Services':
        icon = '🏥';
        break;
      case 'Profile':
        icon = '👤';
        break;
      default:
        icon = '•';
    }
    
    return icon;
  };

  const getTabLabel = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return 'Beranda';
      case 'NutritionTracker':
        return 'Nutrisi';
      case 'HealthTips':
        return 'Tips';
      case 'Services':
        return 'Layanan';
      case 'Profile':
        return 'Profil';
      default:
        return routeName;
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabButton}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.icon,
              isFocused && styles.activeIcon
            ]}>
              {getTabIcon(route.name, isFocused)}
            </Text>
            <Text style={[
              styles.label,
              isFocused && styles.activeLabel
            ]}>
              {getTabLabel(route.name)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
