/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';

/** For transportation of elements to document.body of an element of choice */
class Portal extends React.Component {
  static displayName = 'Portal'

  static propTypes = {
    /** Content to be portaled */
    children: PropTypes.node.isRequired,
    /** Optional node to portal children to */
    node: PropTypes.instanceOf(Object)
  };

  static defaultProps = {
    node: null
  };

  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  }

  render() {
    const { children, node } = this.props;

    if (!isObject(window) && !window.document && !window.document.createElement) {
      return false;
    }

    if (!node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    if (!isFunction(createPortal)) {
      return children;
    }

    return createPortal(
      children,
      node || this.defaultNode
    );
  }
}

export default Portal;
