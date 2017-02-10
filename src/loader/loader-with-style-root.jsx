import React from 'react';
import { StyleRoot } from 'radium';
import Loader from './loader';

// StyleRoot is needed for keyframes to work,
// by exporting it like this a consumer doesn't need to wrap StyleRoot around their application
// https://github.com/FormidableLabs/radium/tree/master/docs/api#keyframes
// https://github.com/FormidableLabs/radium/tree/master/docs/api#styleroot-component
function LoaderWithStyleRoot() {
  return (
    <StyleRoot>
      <Loader />
    </StyleRoot>
  );
}

export default LoaderWithStyleRoot;
