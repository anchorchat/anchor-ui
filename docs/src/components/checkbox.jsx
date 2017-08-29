import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import Checkbox from '../../../dist/checkbox';
import Divider from '../../../dist/divider';
import colors from '../../../dist/settings/colors';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Checkbox from \'anchor-ui/checkbox\';';

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
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      },
      checkbox: { margin: '10px' },
      label: {
        paddingLeft: 0,
        marginTop: '20px',
        color: colors.primaryText
      },
    };

    return (
      <article className="doc">
        <h1>Checkbox</h1>
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
          <Paper>
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
