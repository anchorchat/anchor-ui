export default `
  \`\`\`jsx
  import React from 'react';
  import EmptyState from 'anchor-ui/empty-state';
  import background from '../../assets/images/empty_state_users.jpg';

  const EmptyStateExample = () => (
    <EmptyState
      background={background}
      headerText="Empty state"
      bodyText="You have stumbled upon an empty state my good sir."
      button={
        <Button><p>Click me</p></Button>
      }
    />
  );

  export default EmptyStateExample;
  \`\`\`
`;
