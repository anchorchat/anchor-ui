import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import ChannelHeader from '../../../dist/channel-header';
import Button from '../../../dist/button';
import IconChannels from '../../../dist/icons/icon-channels';
import IconPeople from '../../../dist/icons/icon-people';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import ChannelHeader from \'anchor-ui/channel-header\';';

function ChannelHeaderDoc() {
  const componentData = _.find(components, component => component.displayName === 'ChannelHeader');

  return (
    <article className="doc">
      <h1>Channel header</h1>
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
        <ChannelHeader
          name="Channel 1"
          rightButton={
            <Button iconButton onClick={() => {}}>
              <IconPeople />
            </Button>
          }
          leftButton={
            <Button iconButton onClick={() => {}}>
              <IconChannels />
            </Button>
          }
        />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ChannelHeaderDoc;
