import React from 'react';
import Avatar from 'anchor-ui/avatar';
import _ from 'underscore';
import components from '../../components.json';
import Props from './props';
import theDoctor from '../assets/images/the_doctor.jpg';
import dalek from '../assets/images/dalek.jpg';

function AvatarDoc() {
  const componentData = _.find(components, component => component.displayName === 'Avatar');

  return (
    <article className="doc">
      <h1>Avatar</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Avatar image={theDoctor} />
        <Avatar image={dalek} />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default AvatarDoc;
