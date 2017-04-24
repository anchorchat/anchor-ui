import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Card from '../../../dist/card';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Card from \'anchor-ui/card\';';

function CardDoc() {
  const componentData = _.find(components, component => component.displayName === 'Card');

  return (
    <article className="doc">
      <h1>Card</h1>
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
          <Card style={{ margin: '10px', padding: '10px'}}>
            Card 1
          </Card>
          <Card style={{ margin: '10px', padding: '10px'}}>
            Card 2
          </Card>
          <Card style={{ margin: '10px', padding: '10px'}}>
            Card 3
          </Card>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default CardDoc;
