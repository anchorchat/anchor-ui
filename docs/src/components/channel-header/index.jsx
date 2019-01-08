import React from 'react';
import find from 'lodash/find';
import ChannelHeader from '../../../../dist/channel-header';
import Button from '../../../../dist/button';
import IconChannels from '../../../../dist/icons/icon-channels';
import IconPeople from '../../../../dist/icons/icon-people';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'ChannelHeader' });
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

const ChannelHeaderDoc = () => (
  <article className="page">
    <h1>ChannelHeader</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <section>
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code example" />
      <Paper style={style.paper}>
        <ChannelHeader
          name="Channel 1"
          style={style.channelHeader}
          rightButton={(
            <Button iconButton>
              <IconPeople />
            </Button>
          )}
          leftButton={(
            <Button iconButton>
              <IconChannels />
            </Button>
          )}
        />
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default ChannelHeaderDoc;
