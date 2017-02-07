import React from 'react';
import { Button, IconEmoji, IconExit, IconClose, IconPeople, IconChannels } from 'anchor-ui';
import PropsTable from './props-table';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import colors from '../style/colors';

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
      <section>
        <h1>Props</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default value</th>
              <th>Required</th>
            </tr>
          </thead>
          <PropsTable props={props} />
        </table>
      </section>
    </article>
  );
}

export default ButtonDoc;
