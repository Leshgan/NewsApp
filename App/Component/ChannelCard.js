import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {resize} from '../utils/measures';
import Icon from 'react-native-vector-icons/Ionicons';

class ChannelCard extends PureComponent {
  render() {
    const {channel} = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text style={StyleSheet.flatten([styles.textColor])}>
            {channel.name}
          </Text>
          <Text style={StyleSheet.flatten([styles.textColor])}>
            {channel.description}
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Icon name="star" size={30} />
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
  content: {
    flexShrink: 10,
    flexBasis: 300,
  },
  actions: {
    flexShrink: -10,
    // flexBasis: 100,
  },
  textColor: {
    color: 'white',
  },
});

ChannelCard.propTypes = {
  channel: PropTypes.object,
};

export default ChannelCard;
