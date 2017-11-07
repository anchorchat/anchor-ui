export default `
  \`\`\`jsx
  import React from 'react';
  import ChannelHeader from 'anchor-ui/channel-header';
  import Button from 'anchor-ui/button';
  import IconChannels from 'anchor-ui/cons/icon-channels';
  import IconPeople from 'anchor-ui/cons/icon-people';

  const ChannelHeaderExample = () => {
    <ChannelHeader
      name="Channel 1"
      style={style.channelHeader}
      rightButton={
        <Button iconButton>
          <IconPeople />
        </Button>
      }
      leftButton={
        <Button iconButton>
          <IconChannels />
        </Button>
      }
    />
  };

  export default ChannelHeaderExample;
  \`\`\`
`;
