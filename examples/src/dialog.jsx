import React from 'react';
import { Loader, withTheme, Dialog, Button } from '../../dist/index';

export default withTheme(
  () =>
    <Dialog
      image={<Loader inverted />}
      headerText="Trying to reconnect"
      bodyText="Site is unavailable at the moment"
      button={
        <Button onClick={() => {}} inverted>
          <p>Logout</p>
        </Button>
      }
      hideDialog={() => console.log('hide')}
    />,
  '#1ba6c4'
);
