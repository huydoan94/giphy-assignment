import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  shape, arrayOf, func, bool, string,
} from 'prop-types';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { get, isEmpty } from 'lodash';

import PictureBox from './dashboard/PictureBox';
import { actions } from './Dashboard.actions';
import { getPictures, getIsFetching } from './Dashboard.selectors';

import styles from './Dashboard.styles';

export class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentOffset: 0,
    };
  }

  componentDidMount() {
    this.fetchGiphy(this.state.currentOffset, 20, false);
  }

  fetchGiphy = (offset, limit, isAppend) => {
    this.setState({ currentOffset: offset + limit });
    this.props.fetchGiphy(offset, limit, isAppend);
  }

  handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    const isScrollNearBottom = scrollTop + clientHeight + 200 >= scrollHeight;
    if (isScrollNearBottom && !this.props.isFetching) {
      this.fetchGiphy(this.state.currentOffset, 20, true);
    }
  }

  makePictureProp = picture => ({
    id: picture.id,
    title: isEmpty(picture.title) ? 'Untitled' : picture.title,
    fixedHeightUrl: get(picture, 'images.fixed_height.url'),
    originUrl: get(picture, 'images.original.url'),
    trendingDate: picture.trending_datetime,
    username: get(picture, 'user.username', 'Unknown User'),
    userAvatarUrl: get(picture, 'user.avatar_url'),
  })

  render() {
    const { pictures, isFetching, classes } = this.props;

    return (
      <Container maxWidth="xl" className={classes.container} onScroll={this.handleScroll}>
        <Grid container spacing={2}>
          {pictures.map(picture => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={picture.id}>
              <PictureBox {...this.makePictureProp(picture)} />
            </Grid>
          ))}
          {isFetching && (
            <Grid item xs={12} className={classes.progressContainer}>
              <CircularProgress className={classes.progress} />
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  pictures: arrayOf(shape({
    title: string,
    trending_datetime: string,
    user: shape({
      username: string,
      userAvatarUrl: string,
    }),
    images: shape({
      fixed_height: shape({
        url: string,
      }),
    }),
  })).isRequired,
  isFetching: bool.isRequired,
  fetchGiphy: func.isRequired,
  classes: shape({
    container: string,
    progressContainer: string,
    progress: string,
  }).isRequired,
};

const mapStatesToProps = createStructuredSelector({
  pictures: getPictures,
  isFetching: getIsFetching,
});

const mapDispatchersToProps = dispatch => ({
  fetchGiphy: (offset, limit = 100, isAppend = false) => dispatch(actions.fetchGiphy.start(offset, limit, isAppend)),
});

export default compose(
  withStyles(styles),
  connect(mapStatesToProps, mapDispatchersToProps),
)(Dashboard);
