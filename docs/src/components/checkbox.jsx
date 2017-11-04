import React, { Component } from 'react';
import _ from 'lodash';
import Checkbox from '../../../dist/checkbox';
import Divider from '../../../dist/divider';
import colors from '../../../dist/settings/colors';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Checkbox from 'anchor-ui/checkbox';
  \`\`\`
`;

class CheckboxDoc extends Component {
  state = {
    values: ['One']
  }

  changeCheckBox = (event) => {
    const { values } = this.state;
    const { value, checked } = event.target;

    if (checked && !_.includes(values, value)) {
      return this.setState({
        values: _.union(values, [value])
      });
    }

    if (!checked && _.includes(values, value)) {
      return this.setState({
        values: _.without(values, value)
      });
    }

    return false;
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
      label: {
        paddingLeft: 0,
        marginTop: '20px',
        color: colors.primaryText
      },
      list: {
        paddingLeft: '24px',
        listStyle: 'initial'
      }
    };

    return (
      <article className="page">
        <h1>Checkbox</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <section style={style.checkboxWrapper}>
              <Checkbox
                onChange={this.changeCheckBox}
                label="One"
                name="One"
                style={style.checkbox}
                checked={_.includes(values, 'One')}
                value="One"
              />
              <Checkbox
                onChange={this.changeCheckBox}
                label="Two"
                name="Two"
                style={style.checkbox}
                checked={_.includes(values, 'Two')}
                value="Two"
              />
            </section>
            <Divider />
            <section>
              <p style={style.label}>Checked Items:</p>
              <ul style={style.list}>
                {
                  _.map(values, (value, key) => (
                    <li key={key} style={style.label}>{value}</li>
                  ))
                }
              </ul>
            </section>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default CheckboxDoc;
