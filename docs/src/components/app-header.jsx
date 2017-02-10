import React from 'react';
import { AppHeader, Button, IconExit, colors } from 'anchor-ui';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';
import logo from '../assets/images/logo.svg';

function AppHeaderDoc() {
  const componentData = _.find(components, component => component.displayName === 'AppHeader');

  return (
    <article>
      <h1>App Header</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <AppHeader
          text={
            <a
              href="https://github.com/anchorchat/anchor-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anchor UI
            </a>
          }
          icon={<img src={logo} alt="Anchor Chat" />}
          rightButton={
            <Button onClick={() => {}} iconButton>
              <IconExit color={colors.white} />
            </Button>
          }
        />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default AppHeaderDoc;
