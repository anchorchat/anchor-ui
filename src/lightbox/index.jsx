import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import Button from '../button';
import IconClose from '../icons/icon-close';
import colors from '../settings/colors';
import Overlay from '../overlay';

/** General purpose dialog */
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
      iconColor,
      open,
      ...custom
    } = this.props;

    if (!open) {
      return null;
    }

    return (
      <Overlay style={overlayStyle}>
        <section onClick={hideLightbox} />
        <section style={style} {...custom}>
          <Button onClick={hideLightbox} iconButton>
            <IconClose color={iconColor} />
          </Button>
          <img src={image} alt="lightbox" />
        </section>
      </Overlay>
    );
  }
}

export default Radium(Lightbox);
