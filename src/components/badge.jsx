import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import badgeStyleSheet from '../style/badges';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';

class Badge extends Component {
  static propTypes = {
    content: PropTypes.node.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        badge: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    inverted: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    inverted: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);

    const { sheet: { classes }, style } = props;
    const { color } = context;

    const themeStyle = {
      button: {
        backgroundColor: color
      },
      inverted: {
        color,
        backgroundColor: colors.white,
      }
    };

    const className = getClassNames(classes, style, 'badge', 'Badge');
    const themeClassName = getClassNames(classes, themeStyle.button, 'theme', 'Badge');
    const invertedClassName = getClassNames(classes, themeStyle.inverted, 'theme', 'Badge');

    this.state = {
      className,
      themeClassName,
      invertedClassName
    };
  }

  render() {
    const { content, inverted } = this.props;
    const { className, themeClassName, invertedClassName } = this.state;

    return (
      <span
        className={
          classNames(className, { [themeClassName]: !inverted, [invertedClassName]: inverted })
        }
      >
        {content}
      </span>
    );
  }
}

export default injectSheet(badgeStyleSheet)(Badge);
