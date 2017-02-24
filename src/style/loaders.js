import Radium from 'radium';
import colors from '../settings/colors';

const loaderAnimation = Radium.keyframes({
  '0%': { opacity: 1 },
  '50%': {
    opacity: 0.25,
    transform: 'translateY(-10px)'
  },
  '100%': { opacity: 1 }
}, 'loader');

const styleSheet = {
  loader: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10px'
  },
  dot: {
    backgroundColor: colors.theme,
    borderRadius: '50%',
    display: 'block',
    width: '15px',
    height: '15px',
    margin: '0 5px',
    animation: 'x 1s ease-in-out infinite',
    animationName: loaderAnimation,
    '&:nth-of-type(2)': {
      animationDelay: '.33s'
    },
    '&:last-of-type': {
      animationDelay: '.66s'
    }
  },
  inverted: {
    backgroundColor: colors.white
  }
};

export default styleSheet;
