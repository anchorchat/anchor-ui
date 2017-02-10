import React from 'react';
import { Dialog } from 'anchor-ui';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

function DialogDoc() {
  const componentData = _.find(components, component => component.displayName === 'Dialog');

  return (
    <article className="doc">
      <h1>Dialog</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        {/* Shows a popup over the current table */}
        {/* <Dialog
          headerText="Empty dialog"
          BodyTest="Such empty"
          hideDialog={false}
          onClick={() => {}}
        /> */}
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default DialogDoc;
