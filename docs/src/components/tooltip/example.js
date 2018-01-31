export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import Tooltip from 'anchor-ui/tooltip';
  import IconInfo from 'anchor-ui/icons/icon-info';

  const MyComponent = () => (
    <section>
      <Tooltip icon={<IconInfo />}>
        <h1>Hi! I'm a tooltip!</h1>
      </Tooltip>
    </section>
  );
  \`\`\`
`;
