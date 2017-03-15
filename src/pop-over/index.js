import React from 'react';
import PopOver from './pop-over';

// StyleRoot is needed for keyframes to work,
// by exporting it like this a consumer doesn't need to wrap StyleRoot around their application
// https://github.com/FormidableLabs/radium/tree/master/docs/api#keyframes
// https://github.com/FormidableLabs/radium/tree/master/docs/api#styleroot-component
function PopOverWithStyleRoot(props) {
  return (
      <PopOver {...props} />
  );
}

export default PopOverWithStyleRoot;
