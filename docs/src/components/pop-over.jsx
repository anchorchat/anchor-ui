import React from 'react';
import _ from 'lodash';
import IconMenu from '../../../dist/icon-menu';
import MenuItem from '../../../dist/menu-item';
import IconLanguage from '../../../dist/icons/icon-language';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import PopOver from 'anchor-ui/pop-over';
  \`\`\`
`;

const PopOverDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'PopOver');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    iconMenu: {
      width: '40px',
      margin: '10px'
    },
    headerStyle: { textTransform: 'capitalize' }
  };

  return (
    <article className="page">
      <h1>PopOver</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <Markdown markdown={usage} title="Code example" />
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <IconMenu
            style={style.iconMenu}
            icon={<IconLanguage />}
            header="Language"
            headerStyle={style.headerStyle}
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
};

export default PopOverDoc;
