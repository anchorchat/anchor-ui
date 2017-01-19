import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import loaderStyleSheet from '../style/loaders';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';

class Loader extends Component {
  static propTypes = {
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        loader: PropTypes.string.isRequired,
        dot: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    dotStyle: PropTypes.instanceOf(Object),
  }

  static defaultProps = {
    style: {},
    dotStyle: {}
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, dotStyle } = props;
    const className = getClassNames(classes, style, 'loader', 'Loader');
    const dotClassName = getClassNames(classes, dotStyle, 'dot', 'Loader');

    this.state = {
      className,
      dotClassName
    };
  }

  render() {
    const { className, dotClassName } = this.state;
    const { dotStyle } = this.props;
    const { color } = this.context;
    const backgroundColor = dotStyle.background || dotStyle.backgroundColor || color || colors.theme;

    return (
      <div className={className}>
        <span className={dotClassName} style={{ backgroundColor }} />
        <span className={dotClassName} style={{ backgroundColor }} />
        <span className={dotClassName} style={{ backgroundColor }} />
      </div>
    );
  }
}

export default injectSheet(loaderStyleSheet)(Loader);
