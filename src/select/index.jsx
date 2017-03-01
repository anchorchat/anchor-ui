import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/select';
import IconChevronDown from '../icons/icon-chevron-down';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import PopOver from '../pop-over';
import getPopOverPosition from '../internal/get-pop-over-position';

function getIconStyle(open, overrideStyle) {
  let style = styles.icon;

  if (open) {
    style = combineStyles(style, { transform: 'rotate(180deg)' });
  }

  return combineStyles(style, overrideStyle);
}

class Select extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
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
    const { children, value } = this.props;

    const childrenWithProps = React.Children.map(
      children, child => React.cloneElement(
        child, { closeMenu: this.toggleSelect, active: child.props.value === value }
      )
    );

    return (
      <section style={styles.container}>
        {open ? <div style={styles.clickAway} onClick={this.toggleSelect} /> : null}
        <header
          ref={button => (this.button = button)}
          style={styles.header}
          onClick={this.toggleSelect}
        >
          {childrenWithProps.find(child => child.props.value === value).props.text}
          <div style={getIconStyle(open, {})}>
            <IconChevronDown color={colors.white} />
          </div>
        </header>
        <PopOver
          open={open}
          popOverRef={popOver => (this.popOver = popOver)}
          position={position}
        >
          {childrenWithProps}
        </PopOver>
      </section>
    );
  }
}

export default pure(Radium(Select));
