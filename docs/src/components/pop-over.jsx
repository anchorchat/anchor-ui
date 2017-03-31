import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import IconMenu from 'anchor-ui/icon-menu';
import MenuItem from 'anchor-ui/menu-item';
import IconLanguage from 'anchor-ui/icons/icon-language';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import SearchBox from \'anchor-ui/search-box\';';

function PopOverDoc() {
  const componentData = _.find(components, component => component.displayName === 'PopOver');
  return (
    <article className="doc">
      <h1>Pop Over</h1>
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
        <Paper style={{ margin: 0, padding: '20px' }}>
          <IconMenu
            style={{ width: '40px' }}
            icon={<IconLanguage />}
            header="Language"
            headerStyle={{ textTransform: 'capitalize' }}
            secondaryMenuItems={[<MenuItem text="An item" onClick={() => {}} />, <MenuItem text="Another item" onClick={() => {}} />]}
            dividerText="More items"
          >
            <MenuItem text="Active item" onClick={() => {}} active />
            <MenuItem text="Inactive item" onClick={() => {}} />
          </IconMenu>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default PopOverDoc;
