import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import shallowEqual from 'recompose/shallowEqual';
import emptyStateStyleSheet from '../style/empty-states';
import getClassNames from '../internal/get-class-names';

/**
 * Empty state styling
 */
class EmptyState extends Component {
  static propTypes = {
    /**
     * Body text
     */
    headerText: PropTypes.node.isRequired,
    /**
     * Header text
     */
    bodyText: PropTypes.node.isRequired,
    /**
     * Render a call to action button
     */
    button: PropTypes.node,
    /**
     * Path to background image
     */
    background: PropTypes.string,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        emptyState: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    /**
     * Override the styles of the root element
     */
    style: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the header text element
     */
    headerStyle: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the body text element
     */
    bodyStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    button: null,
    background: '',
    style: {},
    headerStyle: {},
    bodyStyle: {}
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, headerStyle, bodyStyle } = props;

    const className = getClassNames(classes, style, 'emptyState', 'EmptyState');
    const headerClassName = getClassNames(classes, headerStyle, 'header', 'EmptyState');
    const bodyClassName = getClassNames(classes, bodyStyle, 'body', 'EmptyState');

    this.state = {
      className,
      headerClassName,
      bodyClassName
    };
  }

  shouldComponentUpdate(nextProps) {
    return (!shallowEqual(this.props, nextProps));
  }

  render() {
    const { headerText, bodyText, button, background } = this.props;
    const { className, headerClassName, bodyClassName } = this.state;

    const style = {
      backgroundImage: `url(${background})`
    };

    return (
      <section style={style} className={className}>
        <h1 className={headerClassName}>{headerText}</h1>
        <p className={bodyClassName}>{bodyText}</p>
        {button}
      </section>
    );
  }
}

export default injectSheet(emptyStateStyleSheet)(EmptyState);
