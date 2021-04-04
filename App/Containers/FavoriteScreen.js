import React, {PureComponent} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {common} from '../Styles/common';
import ChannelCard from '../Component/ChannelCard';

class FavoriteScreen extends PureComponent {
  renderItem = ({item}) => <ChannelCard key={item.id} channel={item} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.props.favorite} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: common.mainContainer,
});

FavoriteScreen.propTypes = {
  favorite: PropTypes.array,
};

const mapStateToProps = (state) => {
  const {
    channels: {favorite},
  } = state;
  return {
    favorite,
  };
};

export default connect(mapStateToProps, null)(FavoriteScreen);
