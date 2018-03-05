import React from 'react';
import find from 'lodash/find';
import AppHeader from '../../../../dist/app-header';
import Button from '../../../../dist/button';
import { colors } from '../../../../dist/settings';
import IconExit from '../../../../dist/icons/icon-exit';
import Props from '../props';
import components from '../../../components.json';
import logo from '../../assets/images/logo.svg';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'AppHeader' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  appHeader: {
    margin: '10px',
    zIndex: '0'
  }
};

const AppHeaderDoc = () => (
  <article className="page">
    <h1>AppHeader</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <section>
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code example" />
      <Paper style={style.paper}>
        <AppHeader
          style={style.appHeader}
          text="Anchor UI"
          icon={<img src={logo} alt="Anchor Chat" />}
          rightButton={
            <Button iconButton>
              <IconExit color={colors.white} />
            </Button>
          }
        />
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default AppHeaderDoc;
