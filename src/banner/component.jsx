import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import getStyles from './get-styles';
import Media from '../media';
import Button from '../button';
import IconClose from '../icons/icon-close';
import colors from '../settings/colors';

const displayName = 'Banner';

const propTypes = {
  /** Content of the Banner */
  content: PropTypes.shape({
    /** 728x90 banner */
    desktop: PropTypes.node.isRequired,
    /** 320x50 banner */
    mobile: PropTypes.node.isRequired
  }).isRequired,
  /**
   * Callback fired when the close button is clicked
   *
   * function(event: object) => void
   */
  hideBanner: PropTypes.func.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Toggle banner open */
  open: PropTypes.bool
};

const defaultProps = {
  style: {},
  open: false
};

/** 728x90 and 320x50 banners */
class Banner extends Component {
  constructor() {
    super();

    this.state = {
      type: 'desktop'
    };
  }

  setMedia = (matches) => {
    const { type } = this.state;

    if (!matches.small && type === 'desktop') {
      this.setState({
        type: 'mobile'
      });
    }

    if (matches.small && type === 'mobile') {
      this.setState({
        type: 'desktop'
      });
    }
  }

  render() {
    const {
      style, content, hideBanner, open
    } = this.props;
    const { type } = this.state;

    if (!open) {
      return null;
    }

    const query = {
      small: '(min-width: 728px)'
    };

    return (
      <section style={styles.wrapper}>
        <section style={getStyles.root(type, style)}>
          {content[type]}
          <Button iconButton onClick={hideBanner} style={styles.button}>
            <IconClose color={colors.white} />
          </Button>
        </section>
        <Media query={query} onChange={this.setMedia} />
      </section>
    );
  }
}

Banner.displayName = displayName;
Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
