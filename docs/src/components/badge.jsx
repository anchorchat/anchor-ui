import React from 'react';
import { Badge } from 'anchor-ui';
import Props from './props';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function BadgeDoc() {
  const componentData = components['src/components/badge.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
      <h1>Badge</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Badge inverted value={10} maxValue={9} />
        <Badge inverted={false} value={10} maxValue={9} />
      </section>
      <Props props={props} />
    </article>
  );
}

export default BadgeDoc;
