import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import channelHeaderStyle from '../style/channel-header';
import getClassNames from '../internal/get-class-names';

class ChannelHeader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        header: PropTypes.string.isRequired,
        headerText: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(PropTypes.object),
    headerTextStyle: PropTypes.instanceOf(PropTypes.object)
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
    const { name } = this.props;
    const { textClassName, headerClassName } = this.state;

    return (
      <header className={headerClassName}>
        <h1 className={textClassName}>{name}</h1>
      </header>
    );
  }
}

export default injectSheet(channelHeaderStyle)(ChannelHeader);
