import React from 'react';
import { Loader, withTheme } from '../../dist/index';

export default withTheme(() => <Loader headerText="Hold on!" loadingText="We're loading the experience..." />, '#1ba6c4');
