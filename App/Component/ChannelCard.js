import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {actions} from '../Redux/ChannelsRedux';
import {resize} from '../utils/measures';

class ChannelCard extends PureComponent {
  handleToggle = () => {
    const {channel, toggle} = this.props;
    toggle(channel);
  };

  render() {
    const {channel, inFavorites} = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text style={StyleSheet.flatten([styles.textColor, styles.title])}>
            {channel.name}
          </Text>
          <Text style={StyleSheet.flatten([styles.textColor])}>
            {channel.description}
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={this.handleToggle}>
            <Icon
              name="star"
              size={30}
              style={inFavorites ? styles.starInFavorite : styles.starDefault}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    margin: resize(10),
    padding: resize(10),
    backgroundColor: '#720D5D',
    borderRadius: resize(5),
    flexWrap: 'wrap',
    flexShrink: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: resize(16),
    fontWeight: 'bold',
    marginBottom: resize(5),
  },
  content: {
    flexShrink: 10,
    flexBasis: 300,
    padding: resize(5),
    marginRight: resize(5),
  },
  actions: {
    flexShrink: -10,
    padding: resize(5),
  },
  textColor: {
    color: 'white',
  },
  starInFavorite: {
    color: 'yellow',
  },
  starDefault: {
    color: 'black',
  },
});

ChannelCard.propTypes = {
  channel: PropTypes.object,
  inFavorites: PropTypes.bool,
  toggle: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  inFavorites: state.channels.favorite.some(({id}) => props.channel.id === id),
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (channel) => dispatch(actions.toggleFavorite(channel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelCard);
