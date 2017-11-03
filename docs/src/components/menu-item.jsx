import React from 'react';
import _ from 'lodash';
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

const MenuItemDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'MenuItem');
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

  return (
    <article className="doc">
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
            <MenuItem text="Active Menu item" onClick={() => {}} active />
            <MenuItem text="Menu item" onClick={() => {}} />
            <MenuItem icon={<IconReport />} text="Menu item with icon" onClick={() => {}} />
            <MenuItem
              icon={<IconReport />}
              text="Active Menu item with icon"
              onClick={() => {}}
              active
            />
            <MenuItem
              rightButton={
                <IconMenu
                  icon={<IconMore />}
                  header="Items"
                  dividerText="More items"
                >
                  <MenuItem text="Active item" onClick={() => {}} active />
                  <MenuItem text="Inactive item" onClick={() => {}} />
                </IconMenu>
              }
              text="Menu item with rightButton"
              onClick={() => {}}
            />
          </section>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default MenuItemDoc;
