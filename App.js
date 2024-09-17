import * as React from 'react';
import { FavoritesProvider } from './context/FavoritesContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Nhập biểu tượng
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Điều hướng ngăn kéo
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Categories">
      <Drawer.Screen 
        name="Categories" 
        component={TabNavigator} 
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="list" size={20} color={color} /> // Thêm biểu tượng cho mục Categories
          ),
        }} 
      />
      <Drawer.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="star" size={20} color={color} /> // Biểu tượng cho mục Favorites
          ),
        }} 
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="settings" size={20} color={color} /> // Biểu tượng cho mục Settings
          ),
        }} 
      />
    </Drawer.Navigator>
  );
}

// Điều hướng Bottom Tab
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="list" size={20} color={color} /> // Thêm biểu tượng cho tab Categories
          ),
        }} 
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="star" size={20} color={color} /> // Biểu tượng cho tab Favorites
          ),
        }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" size={20} color={color} /> // Biểu tượng cho tab Settings
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

// Điều hướng chính
export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={DrawerNavigator} />
          <Stack.Screen name="Meals" component={MealsScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
