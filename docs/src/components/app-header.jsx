import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import AppHeader from '../../../dist/app-header';
import Button from '../../../dist/button';
import { colors } from '../../../dist/settings';
import { IconExit } from '../../../dist/icons';
import Props from './props';
import components from '../../components.json';
import logo from '../assets/images/logo.svg';
import Paper from '../../../dist/paper';

const usage = '```js\n import AppHeader from \'anchor-ui/app-header\';';

function AppHeaderDoc() {
  const componentData = _.find(components, component => component.displayName === 'AppHeader');

  return (
    <article className="doc">
      <h1>App Header</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={{ margin: 0, padding: '20px' }}>
          <AppHeader
            text="Anchor UI"
            icon={<img src={logo} alt="Anchor Chat" />}
            rightButton={
              <Button onClick={() => {}} iconButton>
                <IconExit color={colors.white} />
              </Button>
            }
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default AppHeaderDoc;
