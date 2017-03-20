import React, { Component, PropTypes, createElement, cloneElement } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';

class Tabs extends Component {
  static displayName = 'Tabs'

  static propTypes = {
    /** The Tabs's content (Tab) */
    children: PropTypes.node.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the tab container */
    tabContainerStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the tab content container */
    contentContainerStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the tab content container */
    contentStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
    tabContainerStyle: {},
    contentContainerStyle: {},
    contentStyle: {}
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      value: 0
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(value) {
    this.setState({
      value
    });
  }

  render() {
    const { children, style, tabContainerStyle, contentContainerStyle, contentStyle } = this.props;
    const { value } = this.state;
    const tabContent = [];

    const tabs = children.map((tab, index) => {
      tabContent.push(
        createElement(
          'div', {
            key: index,
            style: getStyles.tabContent(index === value, contentStyle)
          },
          tab.props.children
        )
      );

      return cloneElement(
        tab,
        {
          key: index,
          selected: index === value,
          onClick: () => this.toggleTab(index)
        }
      );
    });

    return (
      <section style={getStyles.root(style)}>
        <section style={getStyles.tabContainer(tabContainerStyle)}>
          {tabs}
        </section>
        <section style={getStyles.contentContainer(contentContainerStyle)}>
          {tabContent}
        </section>
      </section>
    );
  }
}

export default pure(Radium(Tabs));
