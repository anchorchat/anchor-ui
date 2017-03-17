import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';

class Tabs extends Component {
  static displayName = 'Tabs'

  static propTypes = {
    /** The Tabs's content (Tab), each child must have a value & label prop */
    children: PropTypes.node.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      value: 1
    };
  }

  toggleTab(value) {
    this.setState({
      value
    });
  }

  render() {
    const { children, style } = this.props;
    const { value } = this.state;

    const tabsWithProps = React.Children.map(
      children, child => React.cloneElement(
        child,
        { onClick: () => this.toggleTab(child.props.value), active: child.props.value === value }
      )
    );

    const tabChildrenWithProps = React.Children.map(
      children,
      child => React.Children.map(child.props.children, infant => React.cloneElement(infant))
    );

    return (
      <section style={style}>
        <section>
          {tabsWithProps}
        </section>
        <section>
          {tabChildrenWithProps}
        </section>
      </section>
    );
  }
}

export default pure(Radium(Tabs));
