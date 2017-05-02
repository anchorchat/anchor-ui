import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import ChannelHeader from '../../../dist/channel-header';
import Button from '../../../dist/button';
import IconChannels from '../../../dist/icons/icon-channels';
import IconPeople from '../../../dist/icons/icon-people';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import ChannelHeader from \'anchor-ui/channel-header\';';

function ChannelHeaderDoc() {
  const componentData = _.find(components, component => component.displayName === 'ChannelHeader');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    channelHeader: {
      width: '100%',
      margin: '10px'
    }
  };

  return (
    <article className="doc">
      <h1>ChannelHeader</h1>
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
          <ChannelHeader
            name="Channel 1"
            style={style.channelHeader}
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
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ChannelHeaderDoc;
