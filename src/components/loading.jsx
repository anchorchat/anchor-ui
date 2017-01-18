/* eslint react/require-default-props: 0 */
import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import loadingStyleSheet from '../style/loading';
import getClassNames from '../internal/get-class-names';

class Loading extends Component {
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
    style: {}
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
    const className = getClassNames(classes, style, 'loader', 'Loading');
    const headerTextClassName = getClassNames(classes, headerTextStyle, 'headerText', 'Loading');
    const loadingBallClassName = getClassNames(classes, loadingBallStyle, 'loadingBall', 'Loading');
    const loadingTextClassName = getClassNames(classes, loadingTextStyle, 'loadingText', 'Loading');

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

    return (
      <section className={className}>
        <h1 className={headerTextClassName}>{headerText}</h1>
        <div className={classes.ballContainer}>
          <span className={loadingBallClassName} />
          <span className={loadingBallClassName} />
          <span className={loadingBallClassName} />
        </div>
        <h2 className={loadingTextClassName}>{loadingText}</h2>
      </section>
    );
  }
}

export default injectSheet(loadingStyleSheet)(Loading);
