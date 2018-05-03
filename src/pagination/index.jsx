import React, { Component } from 'react';
import PropTypes from 'prop-types';
import size from 'lodash/size';
import map from 'lodash/map';
import getPager from '../internal/get-pager';
import getStyles from './get-styles';
import Button from '../button';
import IconChevronLeft from '../icons/icon-chevron-left';
import IconChevronRight from '../icons/icon-chevron-right';
import IconFirst from '../icons/icon-first';
import IconLast from '../icons/icon-last';
import colors from '../settings/colors';

const displayName = 'Pagination';

const propTypes = {
  /** The list to navigate through */
  list: PropTypes.arrayOf(Object).isRequired,
  /**
   * Callback fired when the navigation changes
   *
   * function(event: object, pager: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /** Initial active page */
  initialPage: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  /** The page's size */
  pageSize: PropTypes.number,
  /** The paginated list */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the nav element */
  navStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the nav button elements */
  navButtonStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the icon button elements */
  iconButtonStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** The nav's position relative to the children. One of the following: ["top", "bottom"] */
  position: PropTypes.oneOf(['top', 'bottom']),
  /** Jump to a certain page in the list */
  jumpToPage: PropTypes.number // eslint-disable-line react/no-unused-prop-types
};

const defaultProps = {
  initialPage: 1,
  pageSize: 10,
  style: {},
  navStyle: {},
  navButtonStyle: {},
  iconButtonStyle: {},
  position: 'top',
  jumpToPage: 1
};

/** Navigate through large sets of data */
class Pagination extends Component {
  state = { // eslint-disable-line react/sort-comp
    pager: {},
    lastList: null, // eslint-disable-line react/no-unused-state
    lastPageSize: null, // eslint-disable-line react/no-unused-state
    lastJumpToPage: null // eslint-disable-line react/no-unused-state
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.list !== prevState.lastList || nextProps.pageSize !== prevState.lastPageSize) {
      return {
        pager: getPager(nextProps.list, nextProps.initialPage, nextProps.pageSize),
        lastList: nextProps.list,
        lastPageSize: nextProps.pageSize,
        lastJumpToPage: nextProps.jumpToPage
      };
    }

    if (nextProps.jumpToPage !== prevState.lastJumpToPage) {
      return {
        pager: getPager(nextProps.list, nextProps.jumpToPage, nextProps.pageSize),
        lastList: nextProps.list,
        lastPageSize: nextProps.pageSize,
        lastJumpToPage: nextProps.jumpToPage
      };
    }

    return null;
  }

  componentDidMount() {
    this.handlePageChanged();
  }

  componentDidUpdate(prevProps, prevState) {
    const { pager } = this.state;

    if (pager === prevState.pager) {
      return false;
    }

    return this.handlePageChanged();
  }

  handlePageChange = (event, page, list, pageSize) => {
    this.setState({
      pager: getPager(list, page, pageSize)
    });

    this.handlePageChanged(event);
  }

  handlePageChanged = (event = {}) => {
    const { onChange, list } = this.props;
    const { pager } = this.state;

    const items = list.slice(pager.startIndex, pager.endIndex + 1);

    onChange(
      event,
      {
        items,
        totalItems: pager.totalItems,
        totalPages: pager.totalPages,
        currentPage: pager.currentPage
      }
    );
  }

  render() {
    const {
      list,
      pageSize,
      children,
      style,
      navStyle,
      navButtonStyle,
      iconButtonStyle,
      position
    } = this.props;
    const { currentPage, pages, totalPages } = this.state.pager;

    const nav = (
      <nav style={getStyles.nav(position, navStyle)}>
        <Button
          disabled={currentPage === 1}
          onClick={event => this.handlePageChange(event, 1, list, pageSize)}
          style={getStyles.iconButton(iconButtonStyle)}
        >
          <IconFirst color={colors.white} />
        </Button>
        <Button
          onClick={event => this.handlePageChange(event, currentPage - 1, list, pageSize)}
          disabled={currentPage === 1}
          style={getStyles.iconButton(iconButtonStyle)}
        >
          <IconChevronLeft color={colors.white} />
        </Button>
        {map(pages, (page, index) => (
          <Button
            key={index}
            onClick={event => this.handlePageChange(event, page, list, pageSize)}
            style={getStyles.navButton(navButtonStyle)}
            disabled={currentPage === page}
            inverted
          >
            {page}
          </Button>
        ))}
        <Button
          disabled={currentPage === totalPages}
          onClick={event => this.handlePageChange(event, currentPage + 1, list, pageSize)}
          style={getStyles.iconButton(iconButtonStyle)}
        >
          <IconChevronRight color={colors.white} />
        </Button>
        <Button
          disabled={currentPage === totalPages}
          onClick={event => this.handlePageChange(event, totalPages, list, pageSize)}
          style={getStyles.iconButton(iconButtonStyle)}
        >
          <IconLast color={colors.white} />
        </Button>
      </nav>
    );

    return (
      <section style={getStyles.root(style)}>
        {position === 'top' && size(list) > pageSize ? nav : null}
        {children}
        {position === 'bottom' && size(list) > pageSize ? nav : null}
      </section>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
Pagination.displayName = displayName;

export default Pagination;
