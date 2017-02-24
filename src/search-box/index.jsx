import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import IconSearch from '../icons/icon-search';
import styles from '../style/search-box';
import combineStyles from '../internal/combine-styles';

/** General purpose Search box */
class SearchBox extends Component {
  static displayName = 'SearchBox'

  static propTypes = {
    /** Change the input's value */
    onChange: PropTypes.func.isRequired,
    /** The input's value */
    value: PropTypes.string.isRequired,
    /** The input's placeholder */
    placeholder: PropTypes.string,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the input element */
    inputStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the icon element */
    iconStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
    inputStyle: {},
    iconStyle: {},
    placeholder: 'Search something...'
  }

  render() {
    const { value, placeholder, style, inputStyle, iconStyle, onChange } = this.props;

    return (
      <section style={combineStyles(styles.searchBox, style)}>
        <div style={combineStyles(styles.icon, iconStyle)}><IconSearch /></div>
        <input
          style={combineStyles(styles.input, inputStyle)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </section>
    );
  }
}

export default pure(Radium(SearchBox));
