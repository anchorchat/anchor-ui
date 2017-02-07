import React from 'react';
import { AppHeader, Button, IconExit } from 'anchor-ui';
import PropsTable from './props-table';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import colors from '../style/colors';
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
      <section>
        <h1>Props</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default value</th>
              <th>Required</th>
            </tr>
          </thead>
          <PropsTable props={props} />
        </table>
      </section>
    </article>
  );
}

export default AppHeaderDoc;
