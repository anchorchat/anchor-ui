import React from 'react';
import _ from 'lodash';
import Badge from '../../../dist/badge';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Badge from 'anchor-ui/badge';
  \`\`\`
`;

const BadgeDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Badge');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    badge: { margin: '10px' }
  };

  return (
    <article className="doc">
      <h1>Badge</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <Markdown markdown={usage} title="Code example" />
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <Badge style={style.badge} value={9} maxValue={9} />
          <Badge style={style.badge} value={10} maxValue={9} />
          <Badge style={style.badge} value={10} maxValue={9} inverted />
          <Badge style={style.badge} value={100} />
          <Badge style={style.badge} value={100} maxValue={99} />
          <Badge style={style.badge} value={1000} />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default BadgeDoc;
