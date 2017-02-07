import React from 'react';
import _ from 'underscore';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function Alert() {
  const componentData = components['src/components/alert.jsx'];
  const props = omitSheetFromProps(componentData.props);

  return (
    <article>
      <h1>Alert</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Props</h1>
        {_.map(props, (prop, name) => (
          <section key={name}>
            <p>{name}</p>
            <p>{prop.description}</p>
            <p>{prop.type.name}</p>
          </section>
        ))}
      </section>
    </article>
  );
}

export default Alert;
