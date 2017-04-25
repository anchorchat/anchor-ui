import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Slider from '../../../dist/slider';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Slider from \'anchor-ui/slider\';';

function SliderDoc() {
  const componentData = _.find(components, component => component.displayName === 'Slider');

  return (
    <article className="doc">
      <h1>Slider</h1>
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
          <Slider
            onChange={() => {}}
            label="Slider"
            name="slider"
            min={0}
            max={2}
            value={1}
            style={{ margin: '10px' }}
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default SliderDoc;
