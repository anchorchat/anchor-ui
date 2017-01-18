import React from 'react';
import { Loading, withTheme } from '../../dist/index';

function Loader() {
  return (
    <Loading headerText="Hold on!" loadingText="We're loading the experience..." />
  );
}

export default withTheme(Loader, '#1ba6c4');
