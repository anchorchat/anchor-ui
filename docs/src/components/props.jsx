import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

function getPropType(type) {
  if (type.name === 'instanceOf') {
    return type.value;
  }

  if (type.name === 'enum') {
    return 'string';
  }

  if (type.name === 'func') {
    return 'function';
  }

  return type.name;
}

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
              <td>{getPropType(prop.type)}</td>
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
