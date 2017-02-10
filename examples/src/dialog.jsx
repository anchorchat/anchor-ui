import React from 'react';
import { Loader, withTheme, Dialog, Button } from '../../dist';

export default withTheme(
  () =>
    <Dialog
      image={<Loader inverted />}
      headerText="Trying to reconnect"
      bodyText="Site is unavailable at the moment"
      button={
        <Button onClick={() => {}} inverted>
          Logout
        </Button>
      }
      hideDialog={() => console.log('hide')}
    />,
  '#1ba6c4'
);
