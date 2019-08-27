export default theme => ({
  container: {
    backgroundColor: '#ececec',
    margin: 0,
    height: '100vh',
    overflowY: 'auto',
    padding: '10px',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  progress: {
    margin: theme.spacing(2),
  },
});
