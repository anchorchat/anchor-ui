import React, { Component, createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import noop from 'lodash/noop';
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
    initialSelectedIndex: PropTypes.number,
    /**
     * Callback fired when Tab is switched
     *
     * function(event: object, value: string || number) => void
     */
    onTabChange: PropTypes.func,
    /** Index of the selected Tab */
    selectedIndex: PropTypes.number,
  }

  static defaultProps = {
    style: {},
    tabContainerStyle: {},
    contentContainerStyle: {},
    contentStyle: {},
    initialSelectedIndex: 0,
    onTabChange: noop,
    selectedIndex: null
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.getInitialSelectedTab()
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialSelectedIndex !== nextProps.initialSelectedIndex) {
      this.setState({
        value: this.getInitialSelectedTab(nextProps)
      });
    }
  }

  getInitialSelectedTab() {
    const { initialSelectedIndex, children, selectedIndex } = this.props;

    if (selectedIndex) {
      return selectedIndex;
    }

    if (initialSelectedIndex > children.length - 1) {
      return 0;
    }

    return initialSelectedIndex;
  }

  isSelectedTab(index) {
    const { selectedIndex } = this.props;
    const { value } = this.state;

    if (selectedIndex) {
      return (index === selectedIndex);
    }

    return (index === value);
  }

  toggleTab(event, value) {
    const { onTabChange } = this.props;

    this.setState({
      value
    });

    onTabChange(event, value);
  }

  render() {
    const {
      children,
      style,
      tabContainerStyle,
      contentContainerStyle,
      contentStyle,
      initialSelectedIndex,
      onTabChange,
      selectedIndex,
      ...custom
    } = this.props;
    const tabContent = [];

    const tabs = children.map((tab, index) => {
      tabContent.push(
        createElement(
          'div', {
            key: index,
            style: getStyles.tabContent(this.getSelectedIndex(index), contentStyle)
          },
          tab.props.children
        )
      );

      return cloneElement(
        tab,
        {
          key: index,
          selected: this.getSelectedIndex(index),
          onClick: !selectedIndex
            ? event => this.toggleTab(event, index)
            : event => onTabChange(event, index)
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
