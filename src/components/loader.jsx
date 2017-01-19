import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import loaderStyleSheet from '../style/loader';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';

class Loader extends Component {
  static propTypes = {
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        ballContainer: PropTypes.string.isRequired,
        loadingBall: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {}
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    const {
      sheet: { classes },
      style
    } = props;
    const className = getClassNames(classes, style, 'loadingBall', 'Loader');

    this.state = {
      className
    };
  }

  render() {
    const { sheet: { classes } } = this.props;
    const { className } = this.state;
    const { color } = this.context;
    const backgroundColor = color || colors.theme;

    return (
      <div className={classes.ballContainer}>
        <span className={className} style={{ backgroundColor }} />
        <span className={className} style={{ backgroundColor }} />
        <span className={className} style={{ backgroundColor }} />
      </div>
    );
  }
}

export default injectSheet(loaderStyleSheet)(Loader);
