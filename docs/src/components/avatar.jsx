import React from 'react';
import { Avatar } from 'anchor-ui';
import components from '../../components.json';
import Props from './props';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import theDoctor from '../assets/images/the_doctor.jpg';
import dalek from '../assets/images/dalek.jpg';

function AvatarDoc() {
  const componentData = components['src/components/avatar.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
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
      <Props props={props} />
    </article>
  );
}

export default AvatarDoc;
