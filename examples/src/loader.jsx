import React from 'react';
import { Loader } from '../../dist';
import { colors } from '../../dist/settings';

export default () => (
  <section className="loader" style={{ background: colors.background }}>
    <h1>Hold on!</h1>
    <Loader />
    <h1>We are loading your experience...</h1>
  </section>
);
