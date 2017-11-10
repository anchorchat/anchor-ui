export default `
  \`\`\`jsx
  import React from 'react';
  import List from 'anchor-ui/list';
  import ListItem from 'anchor-ui/list-item';
  import Divider from 'anchor-ui/divider';

  const DividerExample = () => (
    <List>
      <ListItem primaryText="ListItem" />
      <Divider />
      <ListItem primaryText="ListItem 2" />
      <Divider text="Divider with text" />
      <ListItem primaryText="ListItem 3" />
    </List>
  );

  export default DividerExample;
  \`\`\`
`;
