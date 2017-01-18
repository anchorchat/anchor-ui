import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import channelHeaderStyleSheet from '../style/channel-header';
import getClassNames from '../internal/get-class-names';

class ChannelHeader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    rightButton: PropTypes.node,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        header: PropTypes.string.isRequired,
        headerText: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    headerTextStyle: PropTypes.instanceOf(Object),
    rightButtonStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
    headerTextStyle: {},
    rightButtonStyle: {},
    rightButton: null
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, headerTextStyle, rightButtonStyle } = props;

    const headerClassName = getClassNames(classes, style, 'header', 'ChannelHeader');
    const textClassName = getClassNames(classes, headerTextStyle, 'headerText', 'ChannelHeader');
    const rightButtonClassName = getClassNames(classes, rightButtonStyle, 'button', 'ChannelHeader');

    this.state = {
      textClassName,
      headerClassName,
      rightButtonClassName
    };
  }

  render() {
    const { name, rightButton } = this.props;
    const { textClassName, headerClassName, rightButtonClassName } = this.state;

    return (
      <header className={headerClassName}>
        <h1 className={textClassName}>{name}</h1>
        {rightButton ? <div className={rightButtonClassName}>{rightButton}</div> : null}
      </header>
    );
  }
}

export default injectSheet(channelHeaderStyleSheet)(ChannelHeader);
