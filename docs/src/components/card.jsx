import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Card from '../../../dist/card';
import CardHeader from '../../../dist/card-header';
import CardContent from '../../../dist/card-content';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Card from \'anchor-ui/card\';';

function CardDoc() {
  const componentData = _.find(components, component => component.displayName === 'Card');
  const headerData = _.find(components, component => component.displayName === 'CardHeader');
  const contentData = _.find(components, component => component.displayName === 'CardContent');

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
          <Card style={{ margin: '10px' }}>
            <CardHeader title="Title" />
            <CardContent>
              <p>Content</p>
            </CardContent>
          </Card>
        </Paper>
      </section>
      <h2>Card</h2>
      <Props props={componentData.props} />
      <h2>CardHeader</h2>
      <Props props={headerData.props} />
      <h2>CardContent</h2>
      <Props props={contentData.props} />
    </article>
  );
}

export default CardDoc;
