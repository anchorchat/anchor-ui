import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import listStyle from '../style/lists';

function List({ children, sheet: { classes }, style }) {
  return <ul className={getClassNames(classes, 'list', style)}>{children}</ul>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      list: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  style: PropTypes.shape({
    list: PropTypes.object
  })
};

export default injectSheet(listStyle)(List);
