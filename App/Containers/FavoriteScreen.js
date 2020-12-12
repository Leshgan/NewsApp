import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class FavoriteScreen extends PureComponent {
  componentDidMount() {
    const {navigation} = this.props;
    navigation.setOptions({
      title: 'Favorite',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Favorite</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoriteScreen;
