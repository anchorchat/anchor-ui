import React, { PropTypes } from 'react';
import _ from 'underscore';

function PropsTable({ props }) {
  return (
    <tbody>
      {_.map(props, (prop, name) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{prop.type.name === 'instanceOf' ? prop.type.value : prop.type.name} </td>
          <td>{prop.description}</td>
          <td>{prop.defaultValue && prop.defaultValue.value ? prop.defaultValue.value : '-'}</td>
          <td>{prop.required ? 'Yes' : 'No'}</td>
        </tr>
      ))}
    </tbody>
  );
}

PropsTable.propTypes = {
  props: PropTypes.shape({}).isRequired
};

export default PropsTable;
