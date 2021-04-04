import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {resize} from '../utils/measures';

export const getHeaderRight = ({route, navigation}) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === 'Favorite') {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.text}>Show News</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: resize(5),
    paddingHorizontal: resize(5),
  },
  text: {
    color: 'white',
  },
});
