import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Style } from 'radium';
import getStyles from './get-styles';
import styles from './styles';

const propTypes = {
  /**
   * Callback fired when the Input's value is changed
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /** The input's value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Type of input */
  type: PropTypes.string,
  /** Type of input */
  placeholder: PropTypes.string,
  /** The input's label */
  label: PropTypes.node,
  /** The input's name */
  name: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the input element */
  inputStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the label element */
  labelStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** The input's max length */
  maxLength: PropTypes.number,
  /** Disables the input */
  disabled: PropTypes.bool,
  /** Display an error message */
  error: PropTypes.node,
  /** Override the styles of the error element */
  errorStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the placeholder */
  placeholderStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Multi line input. If true, a textarea element will be rendered. */
  multiLine: PropTypes.bool,
  /** Multi line input's max visible rows. */
  maxRows: PropTypes.number,
  /** Multi line input's row height. */
  rowHeight: PropTypes.number,
  /** Input tooltip */
  tooltip: PropTypes.node,
  /** Override the styles of the label element */
  tooltipStyle: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  style: {},
  inputStyle: {},
  labelStyle: {},
  maxLength: 500,
  disabled: false,
  error: null,
  type: 'text',
  errorStyle: {},
  placeholder: '',
  label: null,
  placeholderStyle: {},
  multiLine: false,
  maxRows: 12,
  rowHeight: 16,
  tooltip: null,
  tooltipStyle: {}
};

const displayName = 'Input';

/** General purpose form input */
class Input extends Component {
  constructor() {
    super();

    this.state = {
      height: 32
    };
  }

  handleChange = (event) => {
    const { onChange, rowHeight, maxRows } = this.props;
    const { height } = this.state;

    this.textarea.style.height = '1px';

    if (
      this.textarea.scrollHeight !== height &&
      this.textarea.scrollHeight < (maxRows * rowHeight)
    ) {
      if (this.textarea.scrollHeight < 32) {
        this.setState({
          height: 32
        });
      } else {
        this.setState({
          height: this.textarea.scrollHeight
        });
      }
    }

    this.textarea.style.height = '100%';

    onChange(event);
  }

  render() {
    const {
      onChange,
      value,
      maxLength,
      label,
      name,
      type,
      style,
      inputStyle,
      labelStyle,
      disabled,
      error,
      errorStyle,
      placeholder,
      placeholderStyle,
      multiLine,
      maxRows,
      rowHeight,
      tooltip,
      tooltipStyle,
      ...custom
    } = this.props;
    const { height } = this.state;

    let input = (
      <input
        className="input"
        style={getStyles.input(error, tooltip, inputStyle)}
        onChange={onChange}
        value={value}
        type={type}
        maxLength={maxLength}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        {...custom}
      />
    );

    if (multiLine) {
      input = (
        <section style={getStyles.inputRoot(height)}>
          <textarea
            className="input"
            style={getStyles.textarea(error, tooltip, inputStyle)}
            onChange={this.handleChange}
            value={value}
            type={type}
            maxLength={maxLength}
            rows={maxRows}
            id={name}
            placeholder={placeholder}
            ref={(node) => { this.textarea = node; }}
            disabled={disabled}
            {...custom}
          />
        </section>
      );
    }

    return (
      <section style={getStyles.root(disabled, style)}>
        {label ? <label style={getStyles.label(labelStyle)} htmlFor={name}>{label}</label> : null}
        <div style={styles.inputContainer}>
          {input}
          {
            tooltip
            ? <div style={getStyles.tooltip(tooltipStyle)}>{tooltip}</div>
            : null
          }
        </div>
        <Style
          rules={{
            '.input::placeholder': getStyles.placeholder(placeholderStyle)
          }}
        />
        {error ? <span style={getStyles.error(errorStyle)}>{error}</span> : null}
      </section>
    );
  }
}

Input.displayName = displayName;
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
