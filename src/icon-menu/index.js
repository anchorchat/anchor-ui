import Radium from 'radium';
import compose from 'recompose/compose';
import onClickOutside from 'react-onclickoutside';
import IconMenu from './component';

const enhance = compose(
  onClickOutside,
  Radium
);

export default enhance(IconMenu);
