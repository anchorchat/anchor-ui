import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../internal/theme-context';
import colors from '../settings/colors';

const displayName = 'ThemeProvider';
const propTypes = {
  /** Your theme's color */
  color: PropTypes.string,
  /** Children to apply theme color to  */
  children: PropTypes.node.isRequired
};
const defaultProps = {
  color: colors.theme
};

const ThemeProvider = ({ children, color }) => (
  <ThemeContext.Provider value={color}>
    {children}
  </ThemeContext.Provider>
);

ThemeProvider.displayName = displayName;
ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
