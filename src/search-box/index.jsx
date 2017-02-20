import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import IconSearch from '../icons/icon-search';
import styles from '../style/search-box';

/** General purpose Search box */
function SearchBox({ onChange, value, placeholder, style, inputStyle }) {
  return (
    <section style={styles.searchBox}>
      <div style={styles.icon}><IconSearch /></div>
      <input style={styles.input} value={value} onChange={onChange} placeholder={placeholder} />
    </section>
  );
}

SearchBox.displayName = 'SearchBox';

SearchBox.propTypes = {
  /**
   * Change the input's value
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The input's value
   */
  value: PropTypes.string.isRequired,
  /**
   * The input's placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Override the styles of the root element
   */
  style: PropTypes.instanceOf(Object),
  /**
   * Override the styles of the input element
   */
  inputStyle: PropTypes.instanceOf(Object)
};

SearchBox.defaultProps = {
  style: {},
  inputStyle: {},
  placeholder: 'Search something...'
};

export default pure(Radium(SearchBox));
