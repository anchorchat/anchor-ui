import Radium from 'radium';
import compose from 'recompose/compose';
import withTheme from '../with-theme';
import Switch from './component';

const enhance = compose(
  withTheme,
  Radium
);

export default enhance(Switch);
