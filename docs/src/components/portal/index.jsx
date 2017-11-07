/* global document */
import React from 'react';
import _ from 'lodash';
import IconRocket from '../../../../dist/icons/icon-rocket';
import Button from '../../../../dist/button';
import Portal from '../../../../dist/portal';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import example from './example';
import Markdown from '../markdown';

class PortalDoc extends React.Component {
  constructor() {
    super();

    this.state = {
      portal: false
    };
  }

  togglePortal = () => {
    const { portal } = this.state;

    this.setState({
      portal: !portal
    });
  }

  render() {
    const { portal } = this.state;
    const componentData = _.find(components, component => component.displayName === 'Portal');
    const style = {
      paper: {
        margin: 0,
        padding: '20px'
      },
      button: { margin: '10px' }
    };

    return (
      <article className="page">
        <h1>Portal</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Examples</h1>
          <Markdown markdown={example} title="Code example" />
          <Paper style={style.paper} id="portal-container">
            <h2>{portal ? 'Remove the Portal' : 'Add a Portal'}</h2>
            <Button onClick={this.togglePortal} style={style.button} iconButton>
              <IconRocket />
            </Button>
            {
              portal
                ? <Portal node={document.getElementById('portal-container')}>
                  <div>I got portaled to the bottom of this section!</div>
                </Portal>
                : null
            }
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default PortalDoc;
