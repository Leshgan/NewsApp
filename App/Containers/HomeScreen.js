import React, {PureComponent} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {actions} from '../Redux/ChannelsRedux';
import ChannelCard from '../Component/ChannelCard';
import {resize} from '../utils/measures';

class HomeScreen extends PureComponent {
  componentDidMount() {
    const {navigation, getChannels} = this.props;
    getChannels();
    navigation.setOptions({
      title: 'All channels',
    });
  }

  renderItem = ({item}) => <ChannelCard key={item.id} channel={item} />;

  renderList() {
    const {channels} = this.props;
    return <FlatList data={channels} renderItem={this.renderItem} />;
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
    backgroundColor: '#5D1049',
    paddingTop: resize(10),
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

HomeScreen.propTypes = {
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
