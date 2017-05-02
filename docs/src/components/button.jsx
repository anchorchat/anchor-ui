import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import IconEmoji from '../../../dist/icons/icon-emoji';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import colors from '../../../dist/settings/colors';
import Paper from '../../../dist/paper';

const usage = '```js\n import Button from \'anchor-ui/button\';';

function ButtonDoc() {
  const componentData = _.find(components, component => component.displayName === 'Button');
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

  return (
    <article className="doc">
      <h1>Button</h1>
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
          <Button style={style.button} onClick={() => {}}><p>Click me</p></Button>
          <Button style={style.button} inverted onClick={() => {}}><p>Click me</p></Button>
          <Button style={style.flatbutton} flatButton onClick={() => {}}>
            <p>Click me</p>
          </Button>
          <Button style={style.button} iconButton onClick={() => {}}>
            <IconEmoji />
          </Button>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ButtonDoc;
