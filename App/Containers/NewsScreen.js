import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {common} from '../Styles/common';

class NewsScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>News</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: common.mainContainer,
});

export default NewsScreen;
