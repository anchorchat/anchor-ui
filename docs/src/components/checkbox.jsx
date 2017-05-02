import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Checkbox from '../../../dist/checkbox';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Checkbox from \'anchor-ui/checkbox\';';

class CheckboxDoc extends Component {
  constructor() {
    super();

    this.state = {
      one: true,
      two: false
    };

    this.toggleCheckboxOne = this.toggleCheckboxOne.bind(this);
    this.toggleCheckboxTwo = this.toggleCheckboxTwo.bind(this);
  }

  toggleCheckboxOne(event) {
    this.setState({
      one: event.currentTarget.checked
    });
  }

  toggleCheckboxTwo(event) {
    this.setState({
      two: event.currentTarget.checked
    });
  }

  render() {
    const { one } = this.state;
    const { two } = this.state;
    const componentData = _.find(components, component => component.displayName === 'Checkbox');
    const style = {
      paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      },
      checkbox: { margin: '10px' }
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
          <Paper style={style.paper}>
            <Checkbox
              onChange={this.toggleCheckboxOne}
              label="Default checked"
              name="one"
              style={style.checkbox}
              checked={one}
            />
            <Checkbox
              onChange={this.toggleCheckboxTwo}
              label="Unchecked"
              name="two"
              style={style.checkbox}
              checked={two}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default CheckboxDoc;
