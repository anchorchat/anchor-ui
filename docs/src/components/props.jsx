import React, { PropTypes } from 'react';
import _ from 'underscore';

function Props({ props }) {
  return (
    <section>
      <h1>Props</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default value</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {_.map(props, (prop, name) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{prop.type.name === 'instanceOf' ? prop.type.value : prop.type.name} </td>
              <td>{prop.description}</td>
              <td>{prop.defaultValue && prop.defaultValue.value ? prop.defaultValue.value : ''}</td>
              <td>{prop.required ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

Props.propTypes = {
  props: PropTypes.shape({}).isRequired
};

export default Props;
