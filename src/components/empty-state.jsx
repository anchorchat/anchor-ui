import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import emptyStateStyleSheet from '../style/empty-state';
import getClassNames from '../internal/get-class-names';

class EmptyState extends Component {
  static propTypes = {
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    button: PropTypes.node,
    background: PropTypes.string,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        emptyState: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    headerStyle: PropTypes.instanceOf(Object),
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
