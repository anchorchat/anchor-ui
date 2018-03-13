import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import find from 'lodash/find';
import get from 'lodash/get';
import onClickOutside from 'react-onclickoutside';
import EventListener from 'react-event-listener';
import styles from './styles';
import getStyles from './get-styles';
import IconChevronDown from '../icons/icon-chevron-down';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import PopOver from '../pop-over';
import getPopOverPosition from '../internal/get-pop-over-position';
import themeable from '../themeable';

class Select extends Component {
  static displayName = 'Select'

  static propTypes = {
    /** The Select's content (MenuItem), each child must have a value prop */
    children: PropTypes.node.isRequired,
    /** The Select's value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Callback fired when Select's value changes
     *
     * function(event: object, value: string || number) => void
     */
    onChange: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    /** Override the styles of the header element */
    headerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    /** The Select's label */
    label: PropTypes.node,
    /** Override the styles of the label element */
    labelStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    /** Override the styles of the content container */
    contentStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    /** The Select's placeholder */
    placeholder: PropTypes.string,
    /** Display an error message */
    error: PropTypes.node,
    /** Override the styles of the error element */
    errorStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    /** The header's icon color */
    iconColor: PropTypes.string,
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
    value: '',
    label: null,
    style: {},
    headerStyle: {},
    labelStyle: {},
    contentStyle: {},
    placeholder: '',
    error: null,
    errorStyle: {},
    iconColor: colors.white
  }

  constructor() {
    super();

    this.state = {
      open: false,
      positioned: false,
      popOverWidth: '200px'
    };

    this.toggleSelect = this.toggleSelect.bind(this);
    this.positionPopOver = this.positionPopOver.bind(this);
    this.closeSelect = this.closeSelect.bind(this);
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
    const container = this.container.getBoundingClientRect();

    this.setState({
      positioned: true,
      position: getPopOverPosition(button, popOver, 'select'),
      popOverWidth: `${container.width}px`
    });
  }

  toggleSelect() {
    const { open } = this.state;

    this.setState({
      open: !open
    });

    if (open) {
      this.setState({
        positioned: false
      });
    }
  }

  closeSelect() {
    const { open } = this.state;

    if (!open) {
      return false;
    }

    return this.setState({
      open: false,
      positioned: false
    });
  }

  handleClickOutside = () => this.closeSelect()

  handleKeyUp = (event) => {
    if (event.which === 27) {
      this.closeSelect();
    }
  }

  render() {
    const { open, position, popOverWidth } = this.state;
    const {
      children,
      value,
      onChange,
      label,
      style,
      headerStyle,
      labelStyle,
      contentStyle,
      placeholder,
      error,
      errorStyle,
      color,
      eventTypes, // eslint-disable-line react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line react/prop-types
      preventDefault, // eslint-disable-line react/prop-types
      stopPropagation, // eslint-disable-line react/prop-types
      disableOnClickOutside, // eslint-disable-line react/prop-types
      enableOnClickOutside, // eslint-disable-line react/prop-types
      iconColor,
      ...custom
    } = this.props;

    const childrenWithProps = React.Children.map(
      children,
      child => React.cloneElement(
        child,
        {
          closeMenu: this.closeSelect,
          active: child.props.value === value,
          onClick: event => onChange(event, child.props.value)
        }
      )
    );

    const activeChild = find(childrenWithProps, ['props.value', value]);

    const headerText = (
      get(activeChild, 'props.text') || value || placeholder
    );

    const popOverStyle = combineStyles({ minWidth: popOverWidth, right: 'initial' }, contentStyle);

    return (
      <section
        ref={(container) => { this.container = container; }}
        style={combineStyles(styles.root, style)}
        {...custom}
      >
        {label ? <span style={combineStyles(styles.label, labelStyle)}>{label}</span> : null}
        <header
          ref={(button) => { this.button = button; }}
          style={getStyles.header(error, color, headerStyle)}
          onClick={this.toggleSelect}
        >
          {headerText}
          <IconChevronDown color={iconColor} style={getStyles.icon(open)} />
        </header>
        <PopOver
          style={popOverStyle}
          open={open}
          popOverRef={(popOver) => { this.popOver = popOver; }}
          position={position}
        >
          {childrenWithProps}
        </PopOver>
        {error ? <span style={getStyles.error(errorStyle)}>{error}</span> : null}
        {
          open
          ? <EventListener target="window" onKeyUp={this.handleKeyUp} />
          : null
        }
      </section>
    );
  }
}

const enhance = compose(
  themeable(),
  onClickOutside,
  Radium
);

export default enhance(Select);
