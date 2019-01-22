import React, { Component } from 'react';
import find from 'lodash/find';
import MenuItem from '../anchor-ui/menu-item';
import Select from '../anchor-ui/select';
import Props from './props';
import components from '../components.json';
import Paper from '../anchor-ui/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Select from 'anchor-ui/select';
  \`\`\`
`;

const componentData = find(components, { displayName: 'Select' });
const style = {
  paper: {
    margin: 0,
    padding: '20px'
  },
  select: {
    margin: '10px',
    maxWidth: '256px'
  }
};

class SelectDoc extends Component {
  state = {
    value: 1,
    valueError: 1,
  }

  changeValue = (event, value) => {
    this.setState({
      value
    });
  }

  changeValueError = (event, valueError) => {
    this.setState({
      valueError
    });
  }

  render() {
    const { value, valueError } = this.state;

    return (
      <article className="page">
        <h1>{componentData.displayName}</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <Select
              value={value}
              label="Select"
              onChange={this.changeValue}
              style={style.select}
            >
              <MenuItem text="Menu item" value={1} />
              <MenuItem text="Menu item 2" value={2} />
            </Select>
            <Select
              value={valueError}
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
