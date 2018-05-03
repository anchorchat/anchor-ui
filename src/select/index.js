import Radium from 'radium';
import compose from 'recompose/compose';
import onClickOutside from 'react-onclickoutside';
import themeable from '../themeable';
import Select from './component';

const enhance = compose(
  themeable(),
  onClickOutside,
  Radium
);

export default enhance(Select);
