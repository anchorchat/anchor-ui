import React from 'react';
import PropTypes from 'prop-types';
import { StyleRoot } from 'radium';
import Loader from './loader';

// StyleRoot is needed for keyframes to work,
// by exporting it like this a consumer doesn't need to wrap StyleRoot around their application
// https://github.com/FormidableLabs/radium/tree/master/docs/api#keyframes
// https://github.com/FormidableLabs/radium/tree/master/docs/api#styleroot-component
function LoaderWithStyleRoot(props) {
  const {
    dotStyle, // eslint-disable-line no-unused-vars
    inverted, // eslint-disable-line no-unused-vars
    ...custom
  } = props;

  return (
    <StyleRoot {...custom}>
      <Loader {...props} />
    </StyleRoot>
  );
}

LoaderWithStyleRoot.propTypes = {
  /** Override the styles of the dot element */
  dotStyle: PropTypes.instanceOf(Object),
  /** Inverts the color */
  inverted: PropTypes.bool
};

LoaderWithStyleRoot.defaultProps = {
  dotStyle: {},
  inverted: false
};

export default LoaderWithStyleRoot;
