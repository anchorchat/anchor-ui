import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Uranium from 'uranium';
import pure from 'recompose/pure';
import styles from './styles';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import PopOver from '../pop-over';
import getPopOverPosition from '../internal/get-pop-over-position';
import darken from '../internal/darken';

function getIconStyle(open, overrideStyle) {
  let style = styles.icon;

  if (open) {
    style = combineStyles(style, { transform: 'rotate(180deg)' });
  }

  return combineStyles(style, overrideStyle);
}

function getHeaderStyle(themeColor, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = combineStyles(
    styles.header,
    {
      backgroundColor: color,
      ':active': {
        backgroundColor: darken(color, 0.15)
      }
    }
  );

  return combineStyles(style, overrideStyle);
}

class Select extends Component {
  static propTypes = {
    /** The Select's content (MenuItem), each child should have a value prop */
    children: PropTypes.node.isRequired,
    /** The Select's value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    headerStyle: PropTypes.instanceOf(Object),
    /** The Select's label */
    label: PropTypes.node,
    /** Override the styles of the label element */
    labelStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    label: null,
    style: {},
    headerStyle: {},
    labelStyle: {}
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      open: false,
      positioned: false
    };

    this.toggleSelect = this.toggleSelect.bind(this);
    this.positionPopOver = this.positionPopOver.bind(this);
  }

  componentDidUpdate() {
    const { open, positioned } = this.state;

    if (open && !positioned) {
      this.positionPopOver();
    }
  }

  positionPopOver() {
    const button = this.button.getBoundingClientRect();
    const popOver = this.popOver.getBoundingClientRect();

    this.setState({
      positioned: true,
      position: getPopOverPosition(button, popOver, 'select')
    });
  }

  toggleSelect() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open, position } = this.state;
    const { children, value, label, style, headerStyle, labelStyle } = this.props;
    const { color } = this.context;

    const childrenWithProps = React.Children.map(
      children, child => React.cloneElement(
        child, { closeMenu: this.toggleSelect, active: child.props.value === value }
      )
    );

    const activeChild = childrenWithProps.find(child => child.props.value === value);

    const headerText = (activeChild && activeChild.props && activeChild.props.text) || value;

    return (
      <View style={combineStyles(styles.container, style)}>
        <span style={combineStyles(styles.label, labelStyle)}>{label}</span>
        {open ? <View style={styles.clickAway} onClick={this.toggleSelect} /> : null}
        <Text
          ref={button => (this.button = button)}
          style={getHeaderStyle(color, headerStyle)}
          onClick={this.toggleSelect}
        >
          {headerText}
          <View style={getIconStyle(open, {})}>
            <IconChevronDown color={colors.white} />
          </View>
        </Text>
        <PopOver
          open={open}
          popOverRef={popOver => (this.popOver = popOver)}
          position={position}
        >
          {childrenWithProps}
        </PopOver>
      </View>
    );
  }
}

export default pure(Uranium(Select));
