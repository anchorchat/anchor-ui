import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import emptyStateStyleSheet from '../style/empty-state';
import getClassNames from '../internal/get-class-names';
import Button from './button';

class EmptyState extends Component {
  static propTypes = {
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    buttonChildren: PropTypes.element,
    buttonOnClick: PropTypes.func,
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

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, headerStyle, bodyStyle } = props;

    const emptyStateClassName = getClassNames(classes, style, 'emptyState', 'EmptyState');
    const headerClassName = getClassNames(classes, headerStyle, 'header', 'EmptyState');
    const bodyClassName = getClassNames(classes, bodyStyle, 'body', 'EmptyState');

    this.state = {
      emptyStateClassName,
      headerClassName,
      bodyClassName
    };
  }

  render() {
    const { headerText, bodyText, buttonChildren, buttonOnClick, background } = this.props;
    const { emptyStateClassName, headerClassName, bodyClassName } = this.state;

    const style = {
      backgroundImage: `url(${background})`
    };

    return (
      <section style={style} className={emptyStateClassName}>
        <h1 className={headerClassName}>{headerText}</h1>
        <p className={bodyClassName}>{bodyText}</p>
        {buttonChildren && buttonOnClick
          ? <Button onClick={buttonOnClick}>{buttonChildren}</Button>
          : null
        }
      </section>
    );
  }
}

export default injectSheet(emptyStateStyleSheet)(EmptyState);
