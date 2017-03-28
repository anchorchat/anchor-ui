import React from 'react';
import { Loader, Dialog, Button } from '../../dist';

export default () => (
  <Dialog header="Trying to reconnect" hideDialog={() => console.log('hide')}>
    <Loader style={{ alignSelf: 'center' }} inverted />
    <p style={{ color: 'inherit' }}>Site is unavailable at the moment</p>
    <Button onClick={() => {}} inverted>
      Logout
    </Button>
  </Dialog>
);
