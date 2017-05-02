import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import RadioButton from '../../../dist/radio-button';
import RadioButtonGroup from '../../../dist/radio-button-group';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import RadioButton from \'anchor-ui/radio-button\';';

class RadioButtonDoc extends Component {
  constructor() {
    super();

    this.state = {
      value: 'one'
    };

    this.toggleRadio = this.toggleRadio.bind(this);
  }

  toggleRadio(event) {
    this.setState({
      value: event.currentTarget.value
    });
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'RadioButton');
    const groupData = _.find(components, component => component.displayName === 'RadioButtonGroup');
    const style = {
      paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      },
      radioButtonGroup: { margin: '10px' }
    };

    return (
      <article className="doc">
        <h1>RadioButton</h1>
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
            <RadioButtonGroup
              onChange={this.toggleRadio}
              value={this.state.value}
              style={style.radioButtonGroup}
            >
              <RadioButton
                label="Default checked"
                value="one"
              />
              <RadioButton
                label="Unchecked"
                value="two"
              />
            </RadioButtonGroup>
          </Paper>
        </section>
        <h2>RadioButton</h2>
        <Props props={componentData.props} />
        <h2>RadioButtonGroup</h2>
        <Props props={groupData.props} />
      </article>
    );
  }
}

export default RadioButtonDoc;
