import colors from '../settings/colors';

export default {
  sliderRoot: {
    height: '18px',
    width: '100%',
    position: 'relative',
    marginTop: '24px',
    marginBottom: '48px'
  },
  slider: {
    position: 'absolute',
    top: '8px',
    left: '0px',
    width: '100%',
    height: '2px'
  },
  sliderFilled: {
    background: colors.theme,
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  },
  sliderRemaining: {
    background: colors.grey,
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0
  },
  sliderButton: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    top: '1px',
    background: 'black',
    transform: 'translate(-50%, -50%)'
  }
};
