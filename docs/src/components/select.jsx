import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import MenuItem from '../../../dist/menu-item';
import Select from '../../../dist/select';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Select from \'anchor-ui/select\';';

class SelectDoc extends Component {
  constructor() {
    super();

    this.state = {
      value: 1
    };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(value) {
    this.setState({
      value
    });
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'Select');

    return (
      <article className="doc">
        <h1>Menu Item</h1>
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
            <Select value={this.state.value} label="Select" onChange={this.changeValue}>
              <MenuItem text="Menu item" value={1} />
              <MenuItem text="Menu item 2" value={2} />
            </Select>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default SelectDoc;
