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
  constructor() {
    super();

    this.state = {
      values: ['One']
    };

    this.changeCheckBox = this.changeCheckBox.bind(this);
  }

  changeCheckBox = (event) => {
    const { values } = this.state;
    const checked = event.target.checked;
    const value = event.target.value;

    if (checked && !_.includes(values, value)) {
      values.push(value);
    }

    if (!checked && _.includes(values, value)) {
      const index = _.indexOf(values, value);
      values.splice(index, 1);
    }

    this.setState({ values });
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
              <p style={style.label}>Checked Items: </p>
              {
                _.map(values, (value, key) => (
                  <p key={key} style={style.label}>- {value}</p>
                ))
              }
            </section>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default CheckboxDoc;
