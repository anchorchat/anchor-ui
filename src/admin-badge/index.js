import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import themeable from '../themeable';
import AdminBadge from './component';

const enhance = compose(
  themeable(),
  Radium,
  pure
);

export default enhance(AdminBadge);
