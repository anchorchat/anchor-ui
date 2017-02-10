import React from 'react';
import { Button, IconEmoji, IconExit, IconClose, IconPeople, IconChannels, colors } from 'anchor-ui';
import Props from './props';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function ButtonDoc() {
  const componentData = components['src/components/button.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
      <h1>Button</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Button onClick={() => {}}><p>Click me</p></Button>
        <Button iconButton onClick={() => {}}>
          <IconEmoji />
        </Button>
        <Button onClick={() => {}} iconButton>
          <IconExit color={colors.white} />
        </Button>
        <Button iconButton onClick={() => {}}>
          <IconClose color={colors.white} />
        </Button>
        <Button iconButton onClick={() => {}}>
          <IconPeople />
        </Button>
        <Button iconButton onClick={() => {}}>
          <IconChannels />
        </Button>
      </section>
      <Props props={props} />
    </article>
  );
}

export default ButtonDoc;
