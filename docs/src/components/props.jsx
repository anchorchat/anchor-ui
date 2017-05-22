import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Table from '../../../dist/table';
import TableHeader from '../../../dist/table-header';
import TableHeaderColumn from '../../../dist/table-header-column';
import TableBody from '../../../dist/table-body';
import TableRow from '../../../dist/table-row';
import TableColumn from '../../../dist/table-column';

const getPropType = (type) => {
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
};

const Props = ({ props }) => {
  const propsWithoutColor = _.omit(props, 'color');

  return (
    <section>
      <h1>Props</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Type</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Default value</TableHeaderColumn>
            <TableHeaderColumn>Required</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {_.map(propsWithoutColor, (prop, name) => (
            <TableRow key={name}>
              <TableColumn>{name}</TableColumn>
              <TableColumn>{getPropType(prop.type)}</TableColumn>
              <TableColumn>{prop.description}</TableColumn>
              <TableColumn>{prop.defaultValue && prop.defaultValue.value ? prop.defaultValue.value : ''}</TableColumn>
              <TableColumn>{prop.required ? 'Yes' : 'No'}</TableColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

Props.propTypes = {
  props: PropTypes.shape({}).isRequired
};

export default Props;
