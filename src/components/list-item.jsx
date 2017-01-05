import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import listStyle from '../style/lists';

function ListItem({ primaryText, secondaryText, onClick, sheet: { classes }, style }) {
  return (
    <li onClick={onClick} className={getClassNames(classes, 'listItem', style)}>
      <h1 className={getClassNames(classes, 'primaryText', style)}>{primaryText}</h1>
      {secondaryText ? <h2 className={getClassNames(classes, 'secondaryText', style)}>{secondaryText}</h2> : null}
    </li>
  );
}

ListItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      listItem: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  style: PropTypes.shape({
    listItem: PropTypes.object
  }),
  onClick: PropTypes.func
};

export default injectSheet(listStyle)(ListItem);
