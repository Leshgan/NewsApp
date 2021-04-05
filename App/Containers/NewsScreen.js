import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {common} from '../Styles/common';
import {actions} from '../Redux/NewsRedux';

class NewsScreen extends PureComponent {
  componentDidMount() {
    const {channelsIds, getNews} = this.props;
    if (channelsIds.length) {
      getNews(channelsIds);
    }
  }

  render() {
    const {news} = this.props;

    return (
      <View style={styles.container}>
        <Text>News</Text>
        {news.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: common.mainContainer,
});

NewsScreen.propTypes = {
  channelsIds: PropTypes.array,
  news: PropTypes.array,
  fetching: PropTypes.bool,
  getNews: PropTypes.func,
};

const mapStateToProps = (state) => {
  const {
    channels: {favorite = []},
    news: {list},
  } = state;

  return {
    channelsIds: favorite.map(({id}) => id),
    news: list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getNews: (channelsIds) => dispatch(actions.fetchList(channelsIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
