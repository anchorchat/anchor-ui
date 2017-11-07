export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import Checkbox from 'anchor-ui/checkbox';
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
          <Checkbox
            onChange={this.handleCheckboxChange}
            label="One"
            name="One"
            checked={_.includes(values, 'One')}
            value="One"
          />
          <Checkbox
            onChange={this.handleCheckboxChange}
            label="Two"
            name="Two"
            checked={_.includes(values, 'Two')}
            value="Two"
          />
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
