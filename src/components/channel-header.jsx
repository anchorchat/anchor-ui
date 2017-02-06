import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import shallowEqual from 'recompose/shallowEqual';
import channelHeaderStyleSheet from '../style/channel-header';
import getClassNames from '../internal/get-class-names';

class ChannelHeader extends Component {
  static propTypes = {
    name: PropTypes.node.isRequired,
    rightButton: PropTypes.node,
    leftButton: PropTypes.node,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        header: PropTypes.string.isRequired,
        headerText: PropTypes.string.isRequired,
        buttonRight: PropTypes.string.isRequired,
        buttonLeft: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    headerTextStyle: PropTypes.instanceOf(Object),
    rightButtonStyle: PropTypes.instanceOf(Object),
    leftButtonStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
    headerTextStyle: {},
    rightButtonStyle: {},
    leftButtonStyle: {},
    rightButton: null,
    leftButton: null
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, headerTextStyle, rightButtonStyle, leftButtonStyle } = props;

    const headerClassName = getClassNames(classes, style, 'header', 'ChannelHeader');
    const textClassName = getClassNames(classes, headerTextStyle, 'headerText', 'ChannelHeader');
    const rightButtonClassName = getClassNames(classes, rightButtonStyle, 'buttonRight', 'ChannelHeader');
    const leftButtonClassName = getClassNames(classes, leftButtonStyle, 'buttonLeft', 'ChannelHeader');

    this.state = {
      textClassName,
      headerClassName,
      rightButtonClassName,
      leftButtonClassName
    };
  }

  shouldComponentUpdate(nextProps) {
    return (!shallowEqual(this.props, nextProps));
  }

  render() {
    const { name, rightButton, leftButton } = this.props;
    const {
      textClassName,
      headerClassName,
      rightButtonClassName,
      leftButtonClassName
    } = this.state;

    return (
      <header className={headerClassName}>
        {leftButton ? <div className={leftButtonClassName}>{leftButton}</div> : null}
        <h1 className={textClassName}>{name}</h1>
        {rightButton ? <div className={rightButtonClassName}>{rightButton}</div> : null}
      </header>
    );
  }
}

export default injectSheet(channelHeaderStyleSheet)(ChannelHeader);
