export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import Checkbox from 'anchor-ui/checkbox';
  import CheckboxGroup from 'anchor-ui/checkbox-group';
  import Divider from 'anchor-ui/divider';
  import _ from 'lodash';

  class CheckboxExample extends Component {
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

      return (
        <section>
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
          <ul>
            {
              _.map(values, (value, key) => (
                <li key={key}>{value}</li>
              ))
            }
          </ul>
        </section>
      );
    }
  }

  export default CheckboxExample;
  \`\`\`
`;
