import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import listStyleSheet from '../style/lists';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';

class ListItem extends Component {
  static propTypes = {
    primaryText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        listItem: PropTypes.string.isRequired,
        primaryText: PropTypes.string.isRequired,
        secondaryText: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    primaryTextStyle: PropTypes.instanceOf(Object),
    secondaryTextStyle: PropTypes.instanceOf(Object),
    onClick: PropTypes.func,
    active: PropTypes.bool,
    rightButton: PropTypes.node
  }

  static defaultProps = {
    style: {},
    secondaryText: '',
    primaryTextStyle: {},
    secondaryTextStyle: {},
    onClick: null,
    active: false,
    rightButton: null
  }

  static contextTypes = {
    color: PropTypes.string
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
    const {
      primaryText, secondaryText, onClick, active, rightButton, sheet: { classes }
    } = this.props;
    const { className, primaryTextClassName, secondaryTextClassName } = this.state;
    const { color } = this.context;
    const backgroundColor = color || colors.theme;

    return (
      <li
        onClick={onClick}
        className={classNames(className, { [classes.active]: active })}
        style={active ? { backgroundColor } : {}}
      >
        <h1 className={primaryTextClassName}>{primaryText}</h1>
        {secondaryText ? <h2 className={secondaryTextClassName}>{secondaryText}</h2> : null}
        {rightButton}
      </li>
    );
  }
}

export default injectSheet(listStyleSheet)(ListItem);
