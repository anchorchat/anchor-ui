import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Status = {
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
};

const propTypes = {
  /** The alt of the image to be loaded */
  alt: PropTypes.string,
  /** Optional error component to show when error did not load */
  errorComponent: PropTypes.node,
  /** Optional object for the img component of the image */
  imgProps: PropTypes.instanceOf(Object),
  /** An optional handler for the error event */
  onError: PropTypes.func,
  /** An optional handler for the load event */
  onLoad: PropTypes.func,
  /** Node to show before image is loaded */
  preloadComponent: PropTypes.node,
  /** The URL of the image to be loaded */
  src: PropTypes.string.isRequired
};

const defaultProps = {
  alt: '',
  errorComponent: null,
  imgProps: {},
  onError: () => {},
  onLoad: () => {},
  preloadComponent: null
};

const displayName = 'Image';

class Image extends Component {
  state = {
    status: Status.LOADING
  }

  componentDidMount() {
    const { src } = this.props;
    const { status } = this.state;

    if (src && status === Status.LOADING) {
      this.create();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { src } = this.props;

    if (src !== nextProps.src) {
      this.setState({
        status: Status.LOADING,
      });
    }
  }

  componentDidUpdate() {
    const { src } = this.props;
    const { status } = this.state;

    if (src && status === Status.LOADING && !this.img) {
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
      status: Status.FAILED
    });

    onError(error);
  }

  handleLoad = (e) => {
    const { onLoad } = this.props;

    this.destroy();

    this.setState({
      status: Status.LOADED
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

  renderImage = () => {
    const { src, alt, imgProps } = this.props;

    return <img src={src} alt={alt} {...imgProps} />;
  }

  render() {
    const { preloadComponent, errorComponent, src } = this.props;
    const { status } = this.state;

    if (!src) {
      return null;
    }

    if (status === Status.LOADED) {
      return this.renderImage();
    }

    if (status === Status.FAILED) {
      return errorComponent;
    }

    return preloadComponent;
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
Image.displayName = displayName;

export default Image;
