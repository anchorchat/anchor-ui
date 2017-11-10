import Radium from 'radium';
import compose from 'recompose/compose';
import themeable from '../themeable';
import CardHeader from './component';

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(CardHeader);
