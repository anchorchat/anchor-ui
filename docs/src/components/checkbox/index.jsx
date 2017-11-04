import React, { Component } from 'react';
import _ from 'lodash';
import Checkbox from '../../../../dist/checkbox';
import Divider from '../../../../dist/divider';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

class CheckboxDoc extends Component {
  state = {
    values: ['One']
  }

  handleCheckboxChange = (event) => {
    const { values } = this.state;
    const { value, checked } = event.target;

    if (checked) {
      this.setState({
        values: _.union(values, [value])
      });
    } else {
      this.setState({
        values: _.without(values, value)
      });
    }
  }

  render() {
    const { values } = this.state;

    const componentData = _.find(components, component => component.displayName === 'Checkbox');
    const style = {
      checkboxWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      },
      paper: {
        margin: 0,
        padding: '20px'
      },
      checkbox: {
        margin: '10px'
      },
      list: {
        paddingLeft: '24px',
        listStyle: 'initial'
      },
      listItem: {
        margin: '8px 0'
      }
    };

    return (
      <article className="page">
        <h1>Checkbox</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Examples</h1>
          <Markdown markdown={example} title="Code example" />
          <Paper style={style.paper}>
            <section style={style.checkboxWrapper}>
              <Checkbox
                onChange={this.handleCheckboxChange}
                label="One"
                name="One"
                style={style.checkbox}
                checked={_.includes(values, 'One')}
                value="One"
              />
              <Checkbox
                onChange={this.handleCheckboxChange}
                label="Two"
                name="Two"
                style={style.checkbox}
                checked={_.includes(values, 'Two')}
                value="Two"
              />
            </section>
            <Divider text="Checked Items" />
            <ul style={style.list}>
              {
                _.map(values, (value, key) => (
                  <li key={key} style={style.listItem}>{value}</li>
                ))
              }
            </ul>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default CheckboxDoc;
