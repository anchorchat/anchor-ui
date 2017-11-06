export default `
  \`\`\`jsx
  import React from 'react';
  import Button from 'anchor-ui/button';
  import IconEmoji from 'anchor-ui/icons/icon-emoji';

  const ButtonExample = () => {
    <section>
      <Button>
        <p>Default</p>
      </Button>
      <Button inverted>
        <p>Inverted</p>
      </Button>
      <Button disabled>
        <p>Disabled</p>
      </Button>
      <Button flatButton>
        <p>Flat button</p>
      </Button>
      <Button iconButton>
        <IconEmoji />
      </Button>
    </section>
  };

  export default ButtonExample;
  \`\`\`
`;
