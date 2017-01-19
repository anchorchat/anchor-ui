import colors from './colors';

const animationId = 'loader-animation';
const styleSheet = {
  loader: {
    background: colors.background,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw',
    '& > *': {
      alignSelf: 'center'
    }
  },
  headerText: {
    margin: 0,
    marginBottom: '45px',
    fontSize: '16px',
    lineHeight: '16px'
  },
  ballContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  loadingBall: {
    background: colors.theme,
    borderRadius: '50%',
    display: 'block',
    width: '15px',
    height: '15px',
    margin: '0 5px',
    animation: `${animationId} 1s ease-in-out infinite`,
    '&:nth-of-type(2)': {
      animationDelay: '.33s'
    },
    '&:last-of-type': {
      animationDelay: '.66s'
    }
  },
  loadingText: {
    margin: 0,
    marginTop: '45px',
    fontSize: '16px',
    lineHeight: '16px'
  },
  [`@keyframes ${animationId}`]: {
    '0%': { opacity: 1 },
    '50%': {
      opacity: 0.25,
      transform: 'translateY(10px)'
    },
    '100%': { opacity: 1 }
  }
};

export default styleSheet;
