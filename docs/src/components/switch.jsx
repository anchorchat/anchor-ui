import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Switch from '../../../dist/switch';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Switch from \'anchor-ui/switch\';';

class SwitchDoc extends Component {
  constructor() {
    super();

    this.state = {
      active: false
    };

    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const { active } = this.state;
    const componentData = _.find(components, component => component.displayName === 'Switch');

    return (
      <article className="doc">
        <h1>Switch</h1>
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
          <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0 }}>
            <Switch
              toggleSwitch={this.toggleSwitch}
              label="Switch"
              style={{ margin: '10px' }}
              active={active}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default SwitchDoc;
