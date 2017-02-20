import React from 'react';
import { Loader, Dialog, Button } from '../../dist';

export default () => (
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
  />
);
