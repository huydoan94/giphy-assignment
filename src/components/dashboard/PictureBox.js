import React from 'react';
import { compose } from 'redux';
import { string, shape, func } from 'prop-types';
import {
  Card, CardActionArea, CardMedia, CardContent, CardHeader,
  Typography, Avatar,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

import { withPictureFullscreenDialog } from './PictureBox.hoc';
import styles from './PictureBox.styles';

export function PictureBox({
  title, fixedHeightUrl, trendingDate,
  username, userAvatarUrl, classes, handleOpen,
}) {
  return (
    <Card>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className={classes.media}
          image={fixedHeightUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.pictureTitle}>
            {title}
          </Typography>
        </CardContent>
        <CardHeader
          avatar={<Avatar src={userAvatarUrl}>UU</Avatar>}
          title={username}
          subheader={moment(trendingDate).format('l LT')}
        />
      </CardActionArea>
    </Card>
  );
}

PictureBox.propTypes = {
  title: string.isRequired,
  fixedHeightUrl: string.isRequired,
  trendingDate: string.isRequired,
  username: string.isRequired,
  userAvatarUrl: string,
  handleOpen: func.isRequired,
  classes: shape({
    media: string,
    pictureFooter: string,
  }).isRequired,
};

PictureBox.defaultProps = {
  userAvatarUrl: null,
};

export default compose(
  withStyles(styles),
  withPictureFullscreenDialog,
)(PictureBox);
