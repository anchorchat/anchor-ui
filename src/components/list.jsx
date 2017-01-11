import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import listStyleSheet from '../style/lists';
import getClassNames from '../internal/get-class-names';

class List extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        list: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
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

  render() {
    const { children } = this.props;
    const { className } = this.state;

    return <ul className={className}>{children}</ul>;
  }
}

export default injectSheet(listStyleSheet)(List);
