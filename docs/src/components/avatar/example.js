export default `
  \`\`\`jsx
  import React from 'react';
  import Avatar from 'anchor-ui/avatar';

  const AvatarExample = () => (
    <section>
      <Avatar image="https://avatars2.githubusercontent.com/u/3033357?s=120&v=4" />
      <Avatar image="https://avatars3.githubusercontent.com/u/10127707?s=120&v=4" />
      <Avatar image="https://avatars2.githubusercontent.com/u/16486197?v=3&s=120" status="online" />
      <Avatar image="https://avatars1.githubusercontent.com/u/6596471?v=3&s=120" status="away" />
      <Avatar image="https://avatars0.githubusercontent.com/u/14125280?v=3&s=120" status="offline" />
    </section>
  );

  export default AvatarExample;
  \`\`\`
`;
