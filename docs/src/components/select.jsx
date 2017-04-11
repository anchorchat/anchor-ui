import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import MenuItem from '../../../dist/menu-item';
import Select from '../../../dist/select';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Select from \'anchor-ui/select\';';

function SelectDoc() {
  const componentData = _.find(components, component => component.displayName === 'Select');
  return (
    <article className="doc">
      <h1>Menu Item</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0 }}>
          <Select value={1} label="Select" onChange={() => {}}>
            <MenuItem text="Menu item" onClick={() => {}} value={1} />
            <MenuItem text="Menu item" onClick={() => {}} value={2} />
          </Select>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default SelectDoc;
