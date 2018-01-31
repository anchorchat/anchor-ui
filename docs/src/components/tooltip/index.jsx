import React from 'react';
import _ from 'lodash';
import IconInfo from '../../../../dist/icons/icon-info';
import Tooltip from '../../../../dist/tooltip';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import example from './example';
import Markdown from '../markdown';

const TooltipDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Tooltip');
  const style = {
    paper: {
      margin: 0,
      padding: '20px'
    },
    content: {
      paddingTop: '8px',
      paddingRight: '8px',
      paddingLeft: '8px',
      paddingBottom: '8px'
    }
  };

  return (
    <article className="page">
      <h1>Tooltip</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Markdown markdown={example} title="Code example" />
        <Paper style={style.paper}>
          <Tooltip icon={<IconInfo />} contentStyle={style.content}>
            <span>Hi! I&apos;m a tooltip!</span>
          </Tooltip>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default TooltipDoc;
