import React from 'react';
import { Loader, colors } from 'anchor-ui';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

function LoaderDoc() {
  const componentData = _.find(components, component => component.displayName === 'Loader');

  const style = {
    inverted: {
      padding: '10px',
      background: colors.theme,
      width: '75px',
      borderRadius: '3px',
      margin: '10px 0'
    }
  };

  return (
    <article>
      <h1>Loader</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Loader />
        <section style={style.inverted}>
          <Loader inverted />
        </section>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default LoaderDoc;
