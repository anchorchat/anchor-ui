import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import styles from './styles';
import Button from '../button';
import IconClose from '../icons/icon-close';
import colors from '../settings/colors';
import getStyles from './get-styles';
import Overlay from '../overlay';

/** Lightbox for images */
class Lightbox extends Component {
  static displayName = 'Lightbox'

  static propTypes = {
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the overlay element */
    overlayStyle: PropTypes.instanceOf(Object),
    /** Function to hide dialog element */
    hideLightbox: PropTypes.func.isRequired,
    /** Link to the image */
    image: PropTypes.string.isRequired,
    /** The image's title */
    title: PropTypes.string.isRequired,
    /** The close button's icon color */
    iconColor: PropTypes.string,
    /** Toggle the Lightboxs visibility */
    open: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    overlayStyle: {},
    iconColor: colors.white,
    open: false
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const {
      hideLightbox,
      style,
      overlayStyle,
      image,
      title,
      iconColor,
      open,
      ...custom
    } = this.props;

    if (!open) {
      return null;
    }

    return (
      <Overlay style={overlayStyle}>
        <section style={styles.clickAway} onClick={hideLightbox} />
        <section style={getStyles.root(style)} {...custom}>
          <header style={styles.header}>
            {title}
            <Button style={styles.closeButton} onClick={hideLightbox} iconButton>
              <IconClose color={iconColor} />
            </Button>
          </header>
          <img style={styles.image} src={image} alt="lightbox" />
        </section>
      </Overlay>
    );
  }
}

export default Radium(Lightbox);
