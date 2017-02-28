import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/select';
import IconChevronDown from '../icons/icon-chevron-down';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

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
    value: PropTypes.any.isRequired
  }

  constructor() {
    super();

    this.state = {
      open: false
    };

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    const { children, value } = this.props;

    const childrenWithProps = React.Children.map(
      children, child => React.cloneElement(
        child, { closeMenu: this.toggleSelect, active: child.props.value === value }
      )
    );

    let items = null;

    if (open) {
      items = childrenWithProps;
    }

    return (
      <section style={styles.container}>
        <header style={styles.header} onClick={this.toggleSelect}>
          {childrenWithProps.find(child => child.props.value === value).props.text}
          <div style={getIconStyle(open, {})}>
            <IconChevronDown color={colors.white} />
          </div>
        </header>
        <section>
          {items}
        </section>
      </section>
    );
  }
}

export default pure(Radium(Select));
