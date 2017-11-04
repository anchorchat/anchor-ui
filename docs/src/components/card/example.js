export default `
  \`\`\`jsx
  import React from 'react';
  import Card from 'anchor-ui/card';
  import CardHeader from 'anchor-ui/card-header';
  import CardContent from 'anchor-ui/card-content';

  const CardExample = () => (
    <Card>
      <CardHeader title="Title" />
      <CardContent>
        <p>Content</p>
      </CardContent>
    </Card>
  );

  export default CardExample;
  \`\`\`
`;
