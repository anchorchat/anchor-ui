import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import Measure from 'react-measure';
import styles from '../style/banner';
import combineStyles from '../internal/combine-styles';
import Button from '../button';
import IconClose from '../icons/icon-close';
import colors from '../settings/colors';

/** 728x90 and 320x50 banners */
class Banner extends Component {
  static displayName = 'Banner'

  static propTypes = {
    /** Content of the Banner */
    content: PropTypes.shape({
      /** 728x90 banner */
      desktop: PropTypes.node.isRequired,
      /** 320x50 banner */
      mobile: PropTypes.node.isRequired
    }).isRequired,
    hideBanner: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Toggle banner open */
    open: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    open: false
  }

  constructor() {
    super();

    this.state = {
      type: 'desktop'
    };

    this.handleMeasure = this.handleMeasure.bind(this);
  }

  handleMeasure(dimensions) {
    const { type } = this.state;

    if (dimensions.width < 728 && type === 'desktop') {
      this.setState({
        type: 'mobile'
      });
    }

    if (dimensions.width > 728 && type === 'mobile') {
      this.setState({
        type: 'desktop'
      });
    }
  }

  render() {
    const { style, content, hideBanner, open } = this.props;
    const { type } = this.state;

    if (!open) {
      return null;
    }

    return (
      <Measure onMeasure={this.handleMeasure}>
        <section style={styles.wrapper}>
          <section style={combineStyles(combineStyles(styles.banner, styles[type]), style)}>
            {content[type]}
            <Button iconButton onClick={hideBanner} style={styles.button}>
              <IconClose color={colors.white} />
            </Button>
          </section>
        </section>
      </Measure>
    );
  }
}

export default pure(Radium(Banner));
