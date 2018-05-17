import React from 'react';
import find from 'lodash/find';
import IconEmoji from '../../../../dist/icons/icon-emoji';
import Button from '../../../../dist/button';
import Props from '../props';
import components from '../../../components.json';
import colors from '../../../../dist/settings/colors';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'Button' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  flatbutton: {
    color: colors.primaryText,
    margin: '10px'
  },
  button: { margin: '10px' }
};

const ButtonDoc = () => (
  <article className="page">
    <h1>Button</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <section>
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code example" />
      <Paper style={style.paper}>
        <Button style={style.button}>
          <p>Default</p>
        </Button>
        <Button style={style.button} inverted>
          <p>Inverted</p>
        </Button>
        <Button style={style.button} disabled>
          <p>Disabled</p>
        </Button>
        <Button style={style.flatbutton} flatButton>
          <p>Flatbutton</p>
        </Button>
        <Button style={style.button} iconButton>
          <IconEmoji />
        </Button>
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default ButtonDoc;
