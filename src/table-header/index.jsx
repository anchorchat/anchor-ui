import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import getStyles from './get-styles';
import themeable from '../themeable';

/** TableHeaders are used to display data. */
const TableHeader = ({ children, style, color, ...custom }) => (
  <thead style={getStyles.root(color, style)} {...custom}>
    {children}
  </thead>
);

TableHeader.displayName = 'TableHeader';

TableHeader.propTypes = {
  /** The TableHeader's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  color: PropTypes.string.isRequired
};

TableHeader.defaultProps = {
  style: {}
};

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(TableHeader);
