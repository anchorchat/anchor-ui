import React from 'react';
import PropTypes from 'prop-types';
import replace from 'lodash/replace';
import omit from 'lodash/omit';
import map from 'lodash/map';
import escape from 'escape-html';
import Table from '../../../dist/table';
import TableHeader from '../../../dist/table-header';
import TableHeaderColumn from '../../../dist/table-header-column';
import TableBody from '../../../dist/table-body';
import TableRow from '../../../dist/table-row';
import TableColumn from '../../../dist/table-column';
import urlRegex from '../../../dist/url-regex';

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

const createMarkup = (text) => {
  const escapedText = escape(text);

  const urlSchemeRegex = /^(?:https?:\/\/)/;

  let parsedText = replace(escapedText, /\n/g, '<br />');

  const style = 'color: inherit; font-size: inherit; font-weight: inherit; text-decoration: underline;'; // eslint-disable-line max-len

  parsedText = replace(parsedText, urlRegex, (url) => {
    if (!urlSchemeRegex.test(url)) {
      // Add default http:// scheme for urls like example.com
      return (`<a style="${style}" href="http://${url}" target="_blank">${url}</a>`);
    }
    return (`<a style="${style}" href="${url}" target="_blank">${url}</a>`);
  });

  return {
    __html: parsedText
  };
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
                dangerouslySetInnerHTML={createMarkup(prop.description)}
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
