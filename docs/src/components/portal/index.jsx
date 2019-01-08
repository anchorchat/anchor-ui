import React from 'react';
import find from 'lodash/find';
import IconRocket from '../../../../dist/icons/icon-rocket';
import Button from '../../../../dist/button';
import Portal from '../../../../dist/portal';
import Alert from '../../../../dist/alert';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import example from './example';
import Markdown from '../markdown';

const componentData = find(components, { displayName: 'Portal' });
const style = {
  paper: {
    margin: 0,
    padding: '20px'
  },
  button: { margin: '10px' },
  alert: { maxWidth: '100%' }
};

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

    return (
      <article className="page">
        <h1>Portal</h1>
        <Alert
          style={style.alert}
          text="Portal will only transport elements to a given element in React v16 or later. In older versions of React Portal will just render children." // eslint-disable-line max-len
          type="warning"
        />
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
                ? (
                  <Portal node={document.getElementById('portal-container')}>
                    <div>I got portaled to the bottom of this section!</div>
                  </Portal>
                )
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
