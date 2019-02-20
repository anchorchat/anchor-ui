import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import map from 'lodash/map';
import escape from 'escape-html';
import Table from '../anchor-ui/table';
import TableHeader from '../anchor-ui/table-header';
import TableHeaderColumn from '../anchor-ui/table-header-column';
import TableBody from '../anchor-ui/table-body';
import TableRow from '../anchor-ui/table-row';
import TableColumn from '../anchor-ui/table-column';

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
  const propsWithoutColor = omit(props, 'color');

  const style = {
    column: {
      whiteSpace: 'wrap'
    }
  };

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
          {map(propsWithoutColor, (prop, name) => (
            <TableRow key={name}>
              <TableColumn style={style.column}>{name}</TableColumn>
              <TableColumn style={style.column}>{getPropType(prop.type)}</TableColumn>
              <TableColumn
                style={style.column}
                dangerouslySetInnerHTML={{ __html: escape(prop.description) }}
              />
              <TableColumn style={style.column}>
                {prop.defaultValue && prop.defaultValue.value ? prop.defaultValue.value : ''}
              </TableColumn>
              <TableColumn style={style.column}>{prop.required ? 'Yes' : 'No'}</TableColumn>
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
