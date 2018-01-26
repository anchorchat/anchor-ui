export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import List from 'anchor-ui/list';
  import ListItem from 'anchor-ui/list-item';

  const MyComponent = ({ items, style }) => (
    <List
      style={style.list}
      header="Header"
    >
      {items.map((item, index) => (
        <ListItem
          key={index}
          primaryText={item.primaryText}
          secondaryText={item.secondaryText}
          avatar={item.image}
        />
      ))}
    </List>
  );
  \`\`\`
`;
