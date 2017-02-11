import React from 'react';
import ReactMarkdown from 'react-markdown';
import AppHeader from 'anchor-ui/app-header';
import Button from 'anchor-ui/button';
import { colors } from 'anchor-ui/settings';
import { IconExit } from 'anchor-ui/icons';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';
import logo from '../assets/images/logo.svg';

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
        <AppHeader
          text="Anchor UI"
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
