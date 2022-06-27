const pastureStyle = theme => ({
  root: {
    display: 'none',
    position: 'relative',
    '@media (min-width: 769px)': {
      display: 'block',
    },
  },
  pastureLeft: {
    position: 'absolute',
    bottom: '-40rem',
    left: '-30rem',
    width: '50rem',
    height: '50rem',
    borderRadius: '50%',
    backgroundColor: '#F8E6C0',
  },
  pastureCenterBg: {
    position: 'absolute',
    bottom: '-23rem',
    left: '-25vw',
    width: '100vw',
    height: '30rem',
    borderRadius: '50%',
    backgroundColor: '#F7F3A3',
  },
  pastureCenterFg: {
    position: 'absolute',
    bottom: '-23rem',
    right: '-15vw',
    width: '70vw',
    height: '30rem',
    borderRadius: '50%',
    backgroundColor: '#F7C883',
  },
  pastureRight: {
    position: 'absolute',
    bottom: '-48rem',
    right: '-40rem',
    width: '60rem',
    height: '60rem',
    borderRadius: '50%',
    backgroundColor: '#F7DF59',
  },
});

export default pastureStyle;
