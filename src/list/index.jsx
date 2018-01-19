import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import isArray from 'lodash/isArray';
import { AutoSizer, List as VirtualizedList } from 'react-virtualized';
import getStyles from './get-styles';

const displayName = 'List';

const propTypes = {
  /** ListItems to render */
  children: PropTypes.node.isRequired,
  /** Optional header text */
  header: PropTypes.node,
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Specify the height of each item in the list, defaults to 52px */
  itemHeight: PropTypes.number,
  /** Reference list element */
  listRef: PropTypes.func,
  /**
   * Override the styles of the inner list element
   *
   * Height needs to be a value like:
   * - 100%
   * - calc('100%' - 36px)
   *
   * if the header height is changed, this value needs to be changed accordingly
   * */
  listStyle: PropTypes.instanceOf(Object),
  /**
   * Specify amount of items to render outside the view.
   *
   * Defaults to 10, increasing the amount can cause massive performance loss.
   * */
  overscanRowCount: PropTypes.number,
  /**
   * Optional scrolling placeholder
   *
   * - Single component used on every child
   *
   * - Array of components, equal to children, index rendered based on position (placeholder[index])
   *
  */
  scrollPlaceholder: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Scroll to a specific index */
  scrollToIndex: PropTypes.number,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

const defaultProps = {
  header: null,
  headerStyle: {},
  itemHeight: 52,
  listRef: () => {},
  listStyle: {},
  overscanRowCount: 10,
  scrollPlaceholder: null,
  scrollToIndex: undefined,
  style: {}
};

/** A wrapper for ListItems */
class List extends Component {
  renderRows = ({
    index,
    isScrolling,
    key,
    style
  }) => {
    const { scrollPlaceholder, children } = this.props;

    let placeholder;

    if (scrollPlaceholder) {
      placeholder = scrollPlaceholder;
    }

    if (isArray(scrollPlaceholder) && scrollPlaceholder[index]) {
      placeholder = scrollPlaceholder[index];
    }

    return (
      <div
        key={key}
        style={style}
      >
        {
          isScrolling && placeholder
            ? placeholder
            : children[index]
        }
      </div>
    );
  }

  render() {
    const {
      children,
      header,
      headerStyle,
      itemHeight,
      listRef,
      listStyle,
      overscanRowCount,
      scrollPlaceholder,
      scrollToIndex,
      style,
      ...custom
    } = this.props;

    return (
      <section ref={listRef} style={getStyles.root(style)} {...custom}>
        {header ? <h1 style={getStyles.listHeader(headerStyle)}>{header}</h1> : null}
        <ul style={getStyles.list(header, listStyle)}>
          <AutoSizer>
            {({ height, width }) => (
              <VirtualizedList
                height={height}
                width={width}
                overscanRowCount={overscanRowCount}
                rowCount={children.length}
                rowHeight={itemHeight}
                rowRenderer={this.renderRows}
                scrollToIndex={scrollToIndex}
              />
            )}
          </AutoSizer>
        </ul>
      </section>
    );
  }
}

List.displayName = displayName;
List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default Radium(List);
