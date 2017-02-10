import React from 'react';
import { AppHeader, Button, IconExit, colors } from 'anchor-ui';
import Props from './props';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import logo from '../assets/images/logo.svg';

function AppHeaderDoc() {
  const componentData = components['src/components/app-header.jsx'];
  const props = omitSheetFromProps(componentData.props);
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
      <Props props={props} />
    </article>
  );
}

export default AppHeaderDoc;
