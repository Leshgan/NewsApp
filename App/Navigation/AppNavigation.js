import React, {PureComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Containers/HomeScreen';
import FavoriteScreen from '../Containers/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getHeaderRight} from './Header';
import NewsScreen from '../Containers/NewsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class AppNavigation extends PureComponent {
  tabBar = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#4E0D3A', //'#E30425',
        inactiveBackgroundColor: '#4E0D3A',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({_focused, color, size}) => (
            <Ionicons name="list" size={size} color={color} />
          ),
          title: 'All channels',
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={() => ({
          tabBarIcon: ({_focused, color, size}) => (
            <Ionicons name="star" size={size} color={color} />
          ),
          title: 'Favorite',
        })}
      />
    </Tab.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4E0D3A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="App"
            component={this.tabBar}
            options={(options) => ({
              headerTitleAlign: 'center',
              title: 'News App',
              headerRight: () => getHeaderRight(options),
            })}
          />
          <Stack.Screen name="News" component={NewsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
