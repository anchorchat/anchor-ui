import React from 'react';
import { ActivityIndicator } from 'react-native';

// StyleRoot is needed for keyframes to work,
// by exporting it like this a consumer doesn't need to wrap StyleRoot around their application
// https://github.com/FormidableLabs/radium/tree/master/docs/api#keyframes
// https://github.com/FormidableLabs/radium/tree/master/docs/api#styleroot-component
function LoaderWithStyleRoot() {
  return (
    <ActivityIndicator />
  );
}

export default LoaderWithStyleRoot;
