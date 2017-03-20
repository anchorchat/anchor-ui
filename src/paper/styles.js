import colors from '../settings/colors';
import fade from '../internal/fade';

export default {
  depthShadows: [
    [1, 6, 0.88, 1, 4, 0.88],
    [3, 10, 0.84, 3, 10, 0.77],
    [10, 30, 0.81, 6, 10, 0.77],
    [14, 45, 0.75, 10, 18, 0.78],
    [19, 60, 0.70, 15, 20, 0.78],
  ].map(d => (
    `0 ${d[0]}px ${d[1]}px ${fade(colors.black, d[2])},
    0 ${d[3]}px ${d[4]}px ${fade(colors.black, d[5])}`
  )),
  root: {
    padding: '10px',
    borderRadius: '3px',
    background: colors.white,
    margin: '10px'
  }
};
