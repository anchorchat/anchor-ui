import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import IconMenu from '../../../dist/icon-menu';
import MenuItem from '../../../dist/menu-item';
import IconRocket from '../../../dist/icons/icon-rocket';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import fade from '../../../dist/internal/fade';

const usage = '```js\n import IconMenu from \'anchor-ui/icon-menu\';';

const IconMenuDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'IconMenu');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    container: {
      marginRight: '32px'
    },
    iconMenu: {
      width: '40px',
      margin: '10px'
    },
    headerStyle: { textTransform: 'capitalize' },
    button: {
      borderRadius: '3px',

      ':hover': {
        backgroundColor: fade('hotpink', 0.9)
      }
    }
  };

  return (
    <article className="doc">
      <h1>IconMenu</h1>
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
        <Paper style={style.paper}>
          <div style={style.container}>
            <h2>Default</h2>
            <IconMenu
              style={style.iconMenu}
              icon={<IconRocket />}
              header="Items"
              headerStyle={style.headerStyle}
              secondaryMenuItems={[<MenuItem icon={<IconRocket />} text="An item" onClick={() => {}} />, <MenuItem text="Another item" onClick={() => {}} />]}
              dividerText="More items"
            >
              <MenuItem text="Active item" onClick={() => {}} active />
              <MenuItem text="Inactive item" onClick={() => {}} />
            </IconMenu>
          </div>
          <div style={style.container}>
            <h2>With buttonStyle</h2>
            <IconMenu
              style={style.iconMenu}
              icon={<IconRocket color="hotpink" />}
              header="Items"
              headerStyle={style.headerStyle}
              secondaryMenuItems={[<MenuItem icon={<IconRocket />} text="An item" onClick={() => {}} />, <MenuItem text="Another item" onClick={() => {}} />]}
              dividerText="More items"
              buttonStyle={style.button}
            >
              <MenuItem text="Active item" onClick={() => {}} active />
              <MenuItem text="Inactive item" onClick={() => {}} />
            </IconMenu>
          </div>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default IconMenuDoc;
