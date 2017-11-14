import Radium from 'radium';
import compose from 'recompose/compose';
import themeable from '../themeable';
import Dialog from './component';

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(Dialog);
