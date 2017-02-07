import React from 'react';
import { Loader, colors } from 'anchor-ui';
import Props from './props';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function LoaderDoc() {
  const componentData = components['src/components/loader.jsx'];
  const props = omitSheetFromProps(componentData.props);

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
      <hr />
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
        <hr />
      </section>
      <section>
        <h1>Examples</h1>
        <Loader />
        <section style={style.inverted}>
          <Loader inverted />
        </section>
        <hr />
      </section>
      <Props props={props} />
    </article>
  );
}

export default LoaderDoc;
