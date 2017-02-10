import React from 'react';
import { Loader, withTheme } from '../../dist';
import { colors } from '../../dist/settings';

export default withTheme(
  () =>
    <section className="loader" style={{ background: colors.background }}>
      <h1>Hold on!</h1>
      <Loader />
      <h1>We are loading your experience...</h1>
    </section>,
  '#1ba6c4'
);
