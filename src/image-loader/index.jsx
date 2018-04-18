import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const propTypes = {
  /** The alt of the image to be loaded */
  alt: PropTypes.string,
  /** Optional error component to show when image failed to load */
  error: PropTypes.node,
  /** Optional props for the img element */
  imgProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Callback fired when loading throws an error
   *
   * function(event: object) => void
   */
  onError: PropTypes.func,
  /**
   * Callback fired when image is finished loading
   *
   * function(event: object) => void
   */
  onLoad: PropTypes.func,
  /** Placeholder to show while the image is loading */
  placeholder: PropTypes.node,
  /** The URL of the image to be loaded */
  src: PropTypes.string.isRequired
};

const defaultProps = {
  alt: '',
  error: null,
  imgProps: {},
  onError: noop,
  onLoad: noop,
  placeholder: null
};

const displayName = 'ImageLoader';

/* Show a placeholder while an image is loading or an error when an image fails to load. */
class ImageLoader extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.lastSrc !== nextProps.src) {
      return {
        status: 'loading',
        lastSrc: nextProps.src
      };
    }

    return null;
  }

  state = {
    status: 'loading',
    lastSrc: null // eslint-disable-line react/no-unused-state
  }

  componentDidMount() {
    const { src } = this.props;
    const { status } = this.state;

    if (src && status === 'loading') {
      this.create();
    }
  }

  componentDidUpdate() {
    const { src } = this.props;
    const { status } = this.state;

    if (src && status === 'loading' && !this.img) {
      this.create();
    }
  }

  componentWillUnmount() {
    this.destroy();
  }

  handleError = (error) => {
    const { onError } = this.props;

    this.destroy();

    this.setState({
      status: 'failed'
    });

    onError(error);
  }

  handleLoad = (e) => {
    const { onLoad } = this.props;

    this.destroy();

    this.setState({
      status: 'loaded'
    });

    onLoad(e);
  }

  create = () => {
    const { src } = this.props;

    this.destroy();

    this.img = new Image();
    this.img.onload = this.handleLoad;
    this.img.onerror = this.handleError;
    this.img.src = src;
  }

  destroy = () => {
    if (this.img) {
      this.img.onload = null;
      this.img.onerror = null;
      this.img = null;
    }
  }

  render() {
    const {
      placeholder,
      error,
      src,
      alt,
      imgProps
    } = this.props;
    const { status } = this.state;

    if (!src) {
      return null;
    }

    if (status === 'loaded') {
      return <img src={src} alt={alt} {...imgProps} />;
    }

    if (status === 'failed') {
      return error;
    }

    return placeholder;
  }
}

ImageLoader.propTypes = propTypes;
ImageLoader.defaultProps = defaultProps;
ImageLoader.displayName = displayName;

export default ImageLoader;
