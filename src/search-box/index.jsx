import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import debounce from 'lodash/debounce';
import IconSearch from '../icons/icon-search';
import getStyles from './get-styles';

/** General purpose Search box */
class SearchBox extends Component {
  static displayName = 'SearchBox'

  static propTypes = {
    /** Change the input's value */
    onChange: PropTypes.func.isRequired,
    /** Change the search query with debounce */
    changeSearchQuery: PropTypes.func.isRequired,
    /** The input's value */
    value: PropTypes.string.isRequired,
    /** The input's placeholder */
    placeholder: PropTypes.node,
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

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.changeSearchQuery = debounce(this.changeSearchQuery.bind(this), 300, false);
  }

  changeSearchQuery(value) {
    const { changeSearchQuery } = this.props;

    changeSearchQuery(value);
  }

  handleChange(event) {
    const { onChange } = this.props;

    onChange(event.currentTarget.value);
    this.changeSearchQuery(event.currentTarget.value);
  }

  render() {
    const {
      value,
      placeholder,
      style,
      inputStyle,
      iconStyle,
      changeSearchQuery, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      ...custom
    } = this.props;

    return (
      <section style={getStyles.root(style)} {...custom}>
        <div style={getStyles.icon(iconStyle)}><IconSearch /></div>
        <input
          style={getStyles.input(inputStyle)}
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
      </section>
    );
  }
}

export default pure(Radium(SearchBox));
