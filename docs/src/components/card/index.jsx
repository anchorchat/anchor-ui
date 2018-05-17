import React from 'react';
import find from 'lodash/find';
import Card from '../../../../dist/card';
import CardHeader from '../../../../dist/card-header';
import CardContent from '../../../../dist/card-content';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'Card' });
const headerData = find(components, { displayName: 'CardHeader' });
const contentData = find(components, { displayName: 'CardContent' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  card: { margin: '10px' }
};

const CardDoc = () => (
  <article className="page">
    <h1>Card</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <section>
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code example" />
      <Paper style={style.paper}>
        <Card style={style.card}>
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

export default CardDoc;
