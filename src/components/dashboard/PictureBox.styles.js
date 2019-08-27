export default () => ({
  media: {
    height: '200px',
  },
  pictureTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  pictureFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  pictureFullscreen: {
    objectFit: 'contain',
    height: 'calc(100% - 5px)',
    width: '100%',
  },
});
