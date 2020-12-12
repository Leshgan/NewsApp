import React, {PureComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Containers/HomeScreen';
import FavoriteScreen from '../Containers/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class AppNavigation extends PureComponent {
  tabBar = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );

  mainStack = () => (
    <Stack.Navigator initialRouteName="tabs">
      <Stack.Screen name="tabs" component={this.tabBar} />
    </Stack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={this.mainStack}
            options={{
              headerTitleAlign: 'center',
              title: 'News App',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
