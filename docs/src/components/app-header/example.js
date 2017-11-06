export default `
  \`\`\`jsx
  import React from 'react';
  import AppHeader from 'anchor-ui/app-header';
  import Button from 'anchor-ui/button';
  import colors from 'anchor-ui/settings/colors';
  import IconExit from 'anchor-ui/icons/icon-exit';
  import logo from '../../assets/images/logo.svg';

  const AppHeaderExample = () => (
    <AppHeader
      text="Anchor UI"
      icon={<img src={logo} alt="Anchor Chat" />}
      rightButton={
        <Button iconButton>
          <IconExit color={colors.white} />
        </Button>
      }
    />
  );

  export default AppHeaderExample;
  \`\`\`
`;
