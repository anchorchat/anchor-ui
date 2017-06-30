import React, { Component, createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
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
    contentStyle: PropTypes.instanceOf(Object),
    /**
     * Specify initial visible tab index.
     * If `initialSelectedIndex` is set but larger than the total amount of specified tabs,
     * `initialSelectedIndex` will revert back to default.
     */
    initialSelectedIndex: PropTypes.number
  }

  static defaultProps = {
    style: {},
    tabContainerStyle: {},
    contentContainerStyle: {},
    contentStyle: {},
    initialSelectedIndex: 0
  }

  static contextTypes = {
    color: PropTypes.string
  }

  static getSelectedTab(props) {
    let initialSelectedIndex = 0;

    if (props.initialSelectedIndex && props.initialSelectedIndex <= props.children.length - 1) {
      initialSelectedIndex = props.initialSelectedIndex;
    }

    return initialSelectedIndex;
  }

  constructor(props) {
    super(props);

    this.state = {
      value: Tabs.getSelectedTab(props)
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialSelectedIndex !== nextProps.initialSelectedIndex) {
      this.setState({
        value: Tabs.getSelectedTab(nextProps)
      });
    }
  }

  toggleTab(value) {
    this.setState({
      value
    });
  }

  render() {
    const {
      children,
      style,
      tabContainerStyle,
      contentContainerStyle,
      contentStyle,
      initialSelectedIndex,
      ...custom
    } = this.props;
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
      <section style={style} {...custom}>
        <section style={getStyles.tabContainer(tabContainerStyle)}>
          {tabs}
        </section>
        <section style={contentContainerStyle}>
          {tabContent}
        </section>
      </section>
    );
  }
}

export default pure(Radium(Tabs));
