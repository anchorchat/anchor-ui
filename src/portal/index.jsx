import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import isFunction from 'lodash/isFunction';

const displayName = 'Portal';

const propTypes = {
  /** Content to be portaled */
  children: PropTypes.node.isRequired,
  /** Optional node to portal children to */
  node: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  node: null
};

/** Transportation of elements */
class Portal extends Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  }

  render() {
    const { children, node } = this.props;

    const childrenWithProps = React.Children.map(children, child => (
      React.cloneElement(child, { className: 'ignore-react-onclickoutside' })
    ));

    if (!isFunction(document.createElement) || !isFunction(createPortal)) {
      return children;
    }

    if (!node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return createPortal(
      childrenWithProps,
      node || this.defaultNode
    );
  }
}

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;
Portal.displayName = displayName;

export default Portal;
