import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {actions} from '../Redux/ChannelsRedux';

class HomeScreen extends PureComponent {
  componentDidMount() {
    const {navigation, getChannels} = this.props;
    getChannels();
    navigation.setOptions({
      title: 'All channels',
    });
  }

  renderList() {
    const {channels} = this.props;
    return (
      <ScrollView>
        {
          channels.map(channel => (
            <View
              key={channel.id}
              style={styles.channelCardContainer}
            >

            </View>
          ))
        }
      </ScrollView>
    );
  }

  render() {
    const {fetching} = this.props;

    return (
      <View style={styles.container}>
        {fetching ? (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (
          this.renderList()
        )}
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
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  channelCardContainer: {},
});

HomeScreen.prototypes = {
  channels: PropTypes.array,
  fetching: PropTypes.bool,
  getChannels: PropTypes.func,
};

const mapStateToProps = (state) => {
  const {
    channels: {list, fetching},
  } = state;
  return {
    channels: list,
    fetching,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getChannels: () => dispatch(actions.fetchList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
