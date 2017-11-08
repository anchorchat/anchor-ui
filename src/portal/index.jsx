import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import has from 'lodash/has';

const displayName = 'Portal';

const propTypes = {
  /** Content to be portaled */
  children: PropTypes.node.isRequired,
  /** Optional node to portal children to */
  node: PropTypes.instanceOf(Object)
};

const defaultProps = {
  node: null
};

/** For transportation of elements to document.body or an element of choice */
class Portal extends Component {
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

    if (
      has(window, 'document.createElement')
      || createPortal
    ) {
      return children;
    }

    if (!node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return createPortal(
      children,
      node || this.defaultNode
    );
  }
}

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;
Portal.displayName = displayName;

export default Portal;
