import React from 'react';
import find from 'lodash/find';
import noop from 'lodash/noop';
import MenuItem from '../../../dist/menu-item';
import IconMenu from '../../../dist/icon-menu';
import Props from './props';
import components from '../../components.json';
import IconReport from '../../../dist/icons/icon-report';
import IconMore from '../../../dist/icons/icon-more';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import MenuItem from 'anchor-ui/menu-item';
  \`\`\`
`;

const componentData = find(components, { displayName: 'MenuItem' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  wrapper: {
    maxWidth: '256px'
  }
};

const MenuItemDoc = () => (
  <article className="page">
    <h1>Menu Item</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
    <section>
      <h1>Examples</h1>
      <Paper style={style.paper}>
        <section style={style.wrapper}>
          <MenuItem text="Active Menu item" onClick={noop} active />
          <MenuItem text="Menu item" onClick={noop} />
          <MenuItem icon={<IconReport />} text="Menu item with icon" onClick={noop} />
          <MenuItem
            icon={<IconReport />}
            text="Active Menu item with icon"
            onClick={noop}
            active
          />
          <MenuItem
            rightButton={(
              <IconMenu
                icon={<IconMore />}
                header="Items"
                dividerText="More items"
              >
                <MenuItem text="Active item" onClick={noop} active />
                <MenuItem text="Inactive item" onClick={noop} />
              </IconMenu>
            )}
            text="Menu item with rightButton"
            onClick={noop}
          />
        </section>
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default MenuItemDoc;
