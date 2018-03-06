import React, { Component } from 'react';
import find from 'lodash/find';
import Switch from '../../../dist/switch';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Switch from 'anchor-ui/switch';
  \`\`\`
`;

const componentData = find(components, { displayName: 'Switch' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  switch: { margin: '10px' }
};

class SwitchDoc extends Component {
  constructor() {
    super();

    this.state = {
      one: false,
      two: true
    };

    this.toggleSwitchOne = this.toggleSwitchOne.bind(this);
    this.toggleSwitchTwo = this.toggleSwitchTwo.bind(this);
  }

  toggleSwitchOne() {
    this.setState({
      one: !this.state.one
    });
  }

  toggleSwitchTwo() {
    this.setState({
      two: !this.state.two
    });
  }

  render() {
    return (
      <article className="page">
        <h1>Switch</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <Switch
              toggleSwitch={this.toggleSwitchOne}
              label="Switch"
              style={style.switch}
              active={this.state.one}
            />
            <Switch
              toggleSwitch={this.toggleSwitchTwo}
              label="Default enabled"
              style={style.switch}
              active={this.state.two}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default SwitchDoc;
