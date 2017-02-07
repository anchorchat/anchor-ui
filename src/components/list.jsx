/* eslint react/require-default-props: 0 */
import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import shallowEqual from 'recompose/shallowEqual';
import listStyleSheet from '../style/lists';
import getClassNames from '../internal/get-class-names';

/**
 * List styling
 */
class List extends Component {
  static propTypes = {
    /**
     * List of listItems to render
     */
    children: PropTypes.node.isRequired,
    /**
     * Reference to the corresponding listItems list
     */
    listRef: PropTypes.func,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        list: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    /**
     * Override the styles of the root element
     */
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {}
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'list', 'List');

    this.state = {
      className
    };
  }

  shouldComponentUpdate(nextProps) {
    return (!shallowEqual(this.props, nextProps));
  }

  render() {
    const { children, listRef } = this.props;
    const { className } = this.state;

    return <ul ref={listRef} className={className}>{children}</ul>;
  }
}

export default injectSheet(listStyleSheet)(List);
