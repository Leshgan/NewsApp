import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class HomeScreen extends PureComponent {
  componentDidMount() {
    const {navigation} = this.props;
    navigation.setOptions({
      title: 'All channels',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
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

const mapStateToProps = (state) => {
  const {
    channels: {list},
  } = state;
  return {
    channels: list,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
