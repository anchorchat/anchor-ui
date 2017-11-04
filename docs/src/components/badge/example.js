export default `
  \`\`\`jsx
  import React from 'react';
  import Badge from 'anchor-ui/badge';

  const BadgeExample = () => (
    <section>
      <Badge value={9} maxValue={9} />
      <Badge value={10} maxValue={9} />
      <Badge value={10} maxValue={9} inverted />
      <Badge value={100} />
      <Badge value={100} maxValue={99} />
      <Badge value={1000} />
    </section>
  );

  export default BadgeExample;
  \`\`\`
`;
