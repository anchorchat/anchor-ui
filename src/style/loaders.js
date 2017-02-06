import colors from './colors';

const animationId = 'loader-animation';
const styleSheet = {
  loader: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10px'
  },
  dot: {
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
  [`@keyframes ${animationId}`]: {
    '0%': { opacity: 1 },
    '50%': {
      opacity: 0.25,
      transform: 'translateY(-10px)'
    },
    '100%': { opacity: 1 }
  }
};

export default styleSheet;
