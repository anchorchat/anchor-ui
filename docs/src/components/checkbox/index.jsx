import React, { Component } from 'react';
import find from 'lodash/find';
import union from 'lodash/union';
import without from 'lodash/without';
import map from 'lodash/map';
import Checkbox from '../../anchor-ui/checkbox';
import CheckboxGroup from '../../anchor-ui/checkbox-group';
import Divider from '../../anchor-ui/divider';
import Props from '../props';
import components from '../../components.json';
import Paper from '../../anchor-ui/paper';
import Markdown from '../markdown';
import example from './example';

const checkboxData = find(components, { displayName: 'Checkbox' });
const checkboxGroupData = find(components, { displayName: 'CheckboxGroup' });
const style = {
  paper: {
    margin: 0,
    padding: '20px'
  },
  list: {
    paddingLeft: '24px',
    listStyle: 'initial'
  },
  listItem: {
    margin: '8px 0'
  }
};

class CheckboxDoc extends Component {
  state = {
    values: ['One']
  }

  handleCheckboxChange = (event) => {
    const { values } = this.state;
    const { value, checked } = event.target;

    if (checked) {
      this.setState({
        values: union(values, [value])
      });
    } else {
      this.setState({
        values: without(values, value)
      });
    }
  }

  render() {
    const { values } = this.state;

    return (
      <article className="page">
        <h1>Checkbox</h1>
        <section>
          <h1>Description</h1>
          <p>{checkboxData.description}</p>
        </section>
        <section>
          <h1>Examples</h1>
          <Markdown markdown={example} title="Code example" />
          <Paper style={style.paper}>
            <CheckboxGroup values={values} onChange={this.handleCheckboxChange} label="Checkboxes">
              <Checkbox
                label="One"
                name="One"
                value="One"
              />
              <Checkbox
                label="Two"
                name="Two"
                value="Two"
              />
            </CheckboxGroup>
            <Divider text="Checked Items" />
            <ul style={style.list}>
              {
                map(values, (value, key) => (
                  <li key={key} style={style.listItem}>{value}</li>
                ))
              }
            </ul>
          </Paper>
        </section>
        <h2>Checkbox</h2>
        <Props props={checkboxData.props} />
        <h2>CheckboxGroup</h2>
        <Props props={checkboxGroupData.props} />
      </article>
    );
  }
}

export default CheckboxDoc;
