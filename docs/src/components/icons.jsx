import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import IconEmoji from '../../../dist/icons/icon-emoji';
import IconHammer from '../../../dist/icons/icon-hammer';
import IconRocket from '../../../dist/icons/icon-rocket';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import { IconEmoji } from \'anchor-ui/icons\'; \n import IconHammer from \'anchor-ui/icons/icon-hammer\'';

const Icons = () => {
  const icons = _.filter(components, (component, key) => key.match(/icons/));
  const iconNames = _.pluck(icons, 'displayName');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    icon: { margin: '10px' }
  };

  return (
    <article className="doc">
      <h1>Icons</h1>
      <section>
        <h1>Description</h1>
        <p>SVG Icons</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <IconEmoji style={style.icon} />
          <IconHammer color="#1ba6c4" style={style.icon} />
          <IconRocket color="red" style={style.icon} />
        </Paper>
        <h2>Available icons</h2>
        <ul>
          {iconNames.map(icon => <li key={icon}>{icon}</li>)}
        </ul>
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
          <tbody>
            <tr>
              <td>color</td>
              <td>string</td>
              <td>The icon&apos;s color</td>
              <td>#C4C4C4</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
};

export default Icons;
