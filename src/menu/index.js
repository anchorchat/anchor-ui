import compose from 'recompose/compose';
import Radium from 'radium';
import Menu from './component';
import withTheme from '../with-theme';

const enhance = compose(
  withTheme,
  Radium
);

export default enhance(Menu);
