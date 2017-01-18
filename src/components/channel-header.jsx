import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import channelHeaderStyleSheet from '../style/channel-header';
import getClassNames from '../internal/get-class-names';
import Button from './button';

class ChannelHeader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    leftButton: PropTypes.node,
    onLeftButtonClick: PropTypes.func,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        header: PropTypes.string.isRequired,
        headerText: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    headerTextStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
    headerTextStyle: {},
    leftButton: null,
    onLeftButtonClick: null
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, headerTextStyle } = props;

    const headerClassName = getClassNames(classes, style, 'header', 'ChannelHeader');
    const textClassName = getClassNames(classes, headerTextStyle, 'headerText', 'ChannelHeader');

    this.state = {
      textClassName,
      headerClassName
    };
  }

  render() {
    const { name, leftButton, onLeftButtonClick } = this.props;
    const { textClassName, headerClassName } = this.state;

    return (
      <header className={headerClassName}>
        <h1 className={textClassName}>{name}</h1>
        {leftButton ? <Button iconButton onClick={onLeftButtonClick}>{leftButton}</Button> : null}
      </header>
    );
  }
}

export default injectSheet(channelHeaderStyleSheet)(ChannelHeader);
