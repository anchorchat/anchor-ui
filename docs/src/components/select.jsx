import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
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
      value: 1,
      valueError: 1,
    };

    this.changeValue = this.changeValue.bind(this);
    this.changeValueError = this.changeValueError.bind(this);
  }

  changeValue(event, value) {
    this.setState({
      value
    });
  }

  changeValueError(event, valueError) {
    this.setState({
      valueError
    });
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'Select');
    const style = {
      paper: {
        margin: 0,
        padding: '20px'
      },
      select: { margin: '10px' }
    };

    return (
      <article className="doc">
        <h1>{componentData.displayName}</h1>
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
          <Paper style={style.paper}>
            <Select
              value={this.state.value}
              label="Select"
              onChange={this.changeValue}
              style={style.select}
            >
              <MenuItem text="Menu item" value={1} />
              <MenuItem text="Menu item 2" value={2} />
            </Select>
            <Select
              value={this.state.valueError}
              label="Error example"
              onChange={this.changeValueError}
              style={style.select}
              error="Error message"
            >
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
