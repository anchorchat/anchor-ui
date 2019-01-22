import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
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

/** Navigate through large sets of data */
class Pagination extends Component {
  constructor() {
    super();

    this.state = {
      pager: {}
    };
  }

  componentDidMount() {
    const { initialPage, list, pageSize } = this.props;
    this.setPage({}, initialPage, list, pageSize);
  }

  componentWillReceiveProps(nextProps) {
    const {
      initialPage,
      list,
      pageSize,
      jumpToPage
    } = nextProps;

    if (!isEqual(list, this.props.list) || !isEqual(pageSize, this.props.pageSize)) { // eslint-disable-line react/destructuring-assignment
      this.setPage({}, initialPage, list, pageSize);
    }

    if (!isEqual(jumpToPage, this.props.jumpToPage)) { // eslint-disable-line react/destructuring-assignment
      this.setPage({}, jumpToPage, list, pageSize);
    }
  }

  setPage = (event, page, list, pageSize) => {
    const { onChange } = this.props;

    const newPager = getPager(list, page, pageSize);

    const items = list.slice(newPager.startIndex, newPager.endIndex + 1);

    this.setState({ pager: newPager });

    onChange(
      event,
      {
        items,
        totalItems: newPager.totalItems,
        totalPages: newPager.totalPages,
        currentPage: newPager.currentPage
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
    const { pager } = this.state;
    const { currentPage, pages, totalPages } = pager;

    const nav = (
      <nav style={getStyles.nav(position, navStyle)}>
        <Button
          disabled={currentPage === 1}
          onClick={event => this.setPage(event, 1, list, pageSize)}
          style={getStyles.iconButton(iconButtonStyle)}
        >
          <IconFirst color={colors.white} />
        </Button>
        <Button
          onClick={event => this.setPage(event, currentPage - 1, list, pageSize)}
          disabled={currentPage === 1}
          style={getStyles.iconButton(iconButtonStyle)}
        >
          <IconChevronLeft color={colors.white} />
        </Button>
        {map(pages, (page, index) => (
          <Button
            key={index}
            onClick={event => this.setPage(event, page, list, pageSize)}
            style={getStyles.navButton(navButtonStyle)}
            disabled={currentPage === page}
            inverted
          >
            {page}
          </Button>
        ))}
        <Button
          disabled={currentPage === totalPages}
          onClick={event => this.setPage(event, currentPage + 1, list, pageSize)}
          style={getStyles.iconButton(iconButtonStyle)}
        >
          <IconChevronRight color={colors.white} />
        </Button>
        <Button
          disabled={currentPage === totalPages}
          onClick={event => this.setPage(event, totalPages, list, pageSize)}
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

Pagination.propTypes = {
  /** The list to navigate through */
  list: PropTypes.arrayOf(Object).isRequired,
  /**
   * Callback fired when the navigation changes
   *
   * function(event: object, pager: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /** Initial active page */
  initialPage: PropTypes.number,
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
  jumpToPage: PropTypes.number
};

Pagination.defaultProps = {
  initialPage: 1,
  pageSize: 10,
  style: {},
  navStyle: {},
  navButtonStyle: {},
  iconButtonStyle: {},
  position: 'top',
  jumpToPage: 1
};

Pagination.displayName = 'Pagination';

export default Pagination;
