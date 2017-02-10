import React from 'react';
import Badge from 'anchor-ui/badge';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

function BadgeDoc() {
  const componentData = _.find(components, component => component.displayName === 'Badge');

  return (
    <article className="doc">
      <h1>Badge</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Badge inverted value={10} maxValue={9} />
        <Badge value={10} maxValue={9} />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default BadgeDoc;
