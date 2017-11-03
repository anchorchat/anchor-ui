import React from 'react';
import _ from 'lodash';
import ChannelHeader from '../../../dist/channel-header';
import Button from '../../../dist/button';
import IconChannels from '../../../dist/icons/icon-channels';
import IconPeople from '../../../dist/icons/icon-people';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import ChannelHeader from 'anchor-ui/channel-header';
  \`\`\`
`;

const ChannelHeaderDoc = () => {
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
        <Markdown markdown={usage} />
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
};

export default ChannelHeaderDoc;
