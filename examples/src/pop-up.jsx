import React from 'react';
import { Loader, withTheme, PopUp, Button } from '../../dist/index';

export default withTheme(
  () =>
    <PopUp
      image={<Loader inverted />}
      headerText="Trying to reconnect"
      bodyText="Site is unavailable at the moment"
      button={
        <Button onClick={() => {}} inverted>
          <p>Logout</p>
        </Button>
      }
      closePopUp={() => console.log('close')}
    />,
  '#1ba6c4'
);
