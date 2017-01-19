import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import loaderStyleSheet from '../style/loader';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';

class Loader extends Component {
  static propTypes = {
    headerText: PropTypes.node.isRequired,
    loadingText: PropTypes.node.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        loader: PropTypes.string.isRequired,
        headerText: PropTypes.string.isRequired,
        ballContainer: PropTypes.string.isRequired,
        loadingBall: PropTypes.string.isRequired,
        loadingText: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    headerTextStyle: PropTypes.instanceOf(Object),
    loadingBallStyle: PropTypes.instanceOf(Object),
    loadingTextStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
    headerTextStyle: {},
    loadingBallStyle: {},
    loadingTextStyle: {}
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    const {
      sheet: { classes },
      style,
      headerTextStyle,
      loadingBallStyle,
      loadingTextStyle
    } = props;
    const className = getClassNames(classes, style, 'loader', 'Loader');
    const headerTextClassName = getClassNames(classes, headerTextStyle, 'headerText', 'Loader');
    const loadingBallClassName = getClassNames(classes, loadingBallStyle, 'loadingBall', 'Loader');
    const loadingTextClassName = getClassNames(classes, loadingTextStyle, 'loadingText', 'Loader');

    this.state = {
      className,
      headerTextClassName,
      loadingBallClassName,
      loadingTextClassName
    };
  }

  render() {
    const { headerText, loadingText, sheet: { classes } } = this.props;
    const {
      className,
      headerTextClassName,
      loadingBallClassName,
      loadingTextClassName
    } = this.state;
    const { color } = this.context;
    const backgroundColor = color || colors.theme;

    return (
      <section className={className}>
        <h1 className={headerTextClassName}>{headerText}</h1>
        <div className={classes.ballContainer}>
          <span className={loadingBallClassName} style={{ backgroundColor }} />
          <span className={loadingBallClassName} style={{ backgroundColor }} />
          <span className={loadingBallClassName} style={{ backgroundColor }} />
        </div>
        <h2 className={loadingTextClassName}>{loadingText}</h2>
      </section>
    );
  }
}

export default injectSheet(loaderStyleSheet)(Loader);
