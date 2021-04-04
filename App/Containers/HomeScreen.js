import React, {PureComponent} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {actions} from '../Redux/ChannelsRedux';
import ChannelCard from '../Component/ChannelCard';
import {resize} from '../utils/measures';
import {common} from '../Styles/common';

class HomeScreen extends PureComponent {
  componentDidMount() {
    const {getChannels} = this.props;
    getChannels();
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
    backgroundColor: common.mainBackgroundColor,
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
