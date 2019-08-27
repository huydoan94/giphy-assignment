import React from 'react';
import { string, shape } from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent,
  DialogActions, Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './PictureBox.styles';

export const withPictureFullscreenDialog = Component => withStyles(styles)(
  class PictureFullscreenDialog extends React.PureComponent {
    static propTypes = {
      id: string.isRequired,
      title: string.isRequired,
      originUrl: string.isRequired,
      classes: shape({}).isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
    }

    handleOpen = () => this.setState({ isOpen: true })

    handleClose = () => this.setState({ isOpen: false })

    render() {
      const {
        id, title, originUrl, classes,
      } = this.props;
      const { isOpen } = this.state;
      return (
        <React.Fragment>
          <Component {...this.props} handleOpen={this.handleOpen} />
          <Dialog onClose={this.handleClose} aria-labelledby={`picture-dialog-title-${id}`} open={isOpen} fullScreen>
            <DialogTitle id={`picture-dialog-title-${id}`} onClose={this.handleClose}>
              {title}
            </DialogTitle>
            <DialogContent dividers>
              <img src={originUrl} alt={title} className={classes.pictureFullscreen} />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    }
  },
);
