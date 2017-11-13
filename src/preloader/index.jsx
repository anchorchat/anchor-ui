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
  preloader: PropTypes.node,
  /** The URL of the image to be loaded */
  src: PropTypes.string.isRequired
};

const defaultProps = {
  alt: '',
  errorComponent: null,
  imgProps: {},
  onError: () => {},
  onLoad: () => {},
  preloader: null
};

const displayName = 'Preloader';

class Preloader extends Component {
  state = {
    status: Status.LOADING
  }

  componentDidMount() {
    const { src } = this.props;
    const { status } = this.state;

    if (src && status === Status.LOADING) {
      console.log('[componentDidMount] this.create()');
      this.create();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { src } = this.props;
    console.log('[componentWillReceiveProps] src', src);
    console.log('[componentWillReceiveProps] nextProps.src', nextProps.src);
    
    if (nextProps.src && src !== nextProps.src) {
      this.setState({
        status: Status.LOADING,
      });
    }
  }

  componentDidUpdate() {
    const { src } = this.props;
    const { status } = this.state;
    console.log('[componentDidUpdate] status', status);
    
    if (src && status === Status.LOADING && !this.img) {
      console.log('[componentDidUpdate] this.create()');
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
    console.log('error', error);
    
    onError(error);
  }

  handleLoad = (e) => {
    const { onLoad } = this.props;

    this.destroy();

    this.setState({
      status: Status.LOADED
    });
    console.log('loaded');
    
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
    const { preloader, errorComponent, src } = this.props;
    const { status } = this.state;
    console.log('status', status);

    if (!src) {
      return null;
    }

    if (status === Status.LOADED) {
      return this.renderImage();
    }

    if (status === Status.FAILED) {
      return errorComponent;
    }

    return preloader;
  }
}

Preloader.propTypes = propTypes;
Preloader.defaultProps = defaultProps;
Preloader.displayName = displayName;

export default Preloader;
