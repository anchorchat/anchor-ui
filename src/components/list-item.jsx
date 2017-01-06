import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import listStyle from '../style/lists';
import getClassNames from '../internal/get-class-names';

class ListItem extends Component {
  static propTypes = {
    primaryText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        listItem: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(PropTypes.object),
    primaryTextStyle: PropTypes.instanceOf(PropTypes.object),
    secondaryTextStyle: PropTypes.instanceOf(PropTypes.object),
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, primaryTextStyle, secondaryTextStyle } = props;

    const className = getClassNames(classes, style, 'listItem', 'ListItem');
    const primaryTextClassName = getClassNames(classes, primaryTextStyle, 'primaryText', 'ListItem');
    const secondaryTextClassName = getClassNames(
      classes, secondaryTextStyle, 'secondaryText', 'ListItem'
    );

    this.state = {
      className,
      primaryTextClassName,
      secondaryTextClassName
    };
  }

  render() {
    const { primaryText, secondaryText, onClick } = this.props;
    const { className, primaryTextClassName, secondaryTextClassName } = this.state;

    return (
      <li onClick={onClick} className={className}>
        <h1 className={primaryTextClassName}>{primaryText}</h1>
        {secondaryText ? <h2 className={secondaryTextClassName}>{secondaryText}</h2> : null}
      </li>
    );
  }
}

export default injectSheet(listStyle)(ListItem);
