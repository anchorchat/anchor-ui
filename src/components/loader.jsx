import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import shallowEqual from 'recompose/shallowEqual';
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
    inverted: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    dotStyle: {},
    inverted: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);

    const { sheet: { classes }, style, dotStyle } = props;
    const { color } = context;

    const themeStyle = {
      loader: {
        backgroundColor: color
      },
      inverted: {
        backgroundColor: colors.white
      }
    };
    const className = getClassNames(classes, style, 'loader', 'Loader');
    const dotClassName = getClassNames(classes, dotStyle, 'dot', 'Loader');
    const themeClassName = getClassNames(classes, themeStyle.loader, 'theme', 'Loader');
    const invertedClassName = getClassNames(classes, themeStyle.inverted, 'theme', 'Loader');

    this.state = {
      className,
      dotClassName,
      themeClassName,
      invertedClassName
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const { inverted } = this.props;
    const { className, dotClassName, themeClassName, invertedClassName } = this.state;

    return (
      <div className={className}>
        <span
          className={classNames(dotClassName, themeClassName, { [invertedClassName]: inverted })}
        />
        <span
          className={classNames(dotClassName, themeClassName, { [invertedClassName]: inverted })}
        />
        <span
          className={classNames(dotClassName, themeClassName, { [invertedClassName]: inverted })}
        />
      </div>
    );
  }
}

export default injectSheet(loaderStyleSheet)(Loader);
