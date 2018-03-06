import React, { Component } from 'react';
import find from 'lodash/find';
import faker from 'faker';
import RadioButton from '../../../dist/radio-button';
import RadioButtonGroup from '../../../dist/radio-button-group';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Avatar from '../../../dist/avatar';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import RadioButton from 'anchor-ui/radio-button';
  \`\`\`
`;

const customIcon = faker.image.image(40, 40);

const componentData = find(components, { displayName: 'RadioButton' });
const groupData = find(components, { displayName: 'RadioButtonGroup' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  radioButtonGroup: {
    margin: '10px'
  },
  avatar: {
    width: '24px',
    height: '24px'
  }
};

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
    return (
      <article className="page">
        <h1>RadioButton</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <RadioButtonGroup
              onChange={this.toggleRadio}
              value={this.state.value}
              style={style.radioButtonGroup}
              label="RadioButton"
            >
              <RadioButton
                label="Default checked"
                value="one"
              />
              <RadioButton
                label="Unchecked"
                value="two"
              />
              <RadioButton
                label="Custom icon"
                value="three"
                icon={<Avatar style={style.avatar} image={customIcon} />}
              />
              <RadioButton
                value="four"
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
