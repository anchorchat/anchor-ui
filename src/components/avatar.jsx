import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import shallowEqual from 'recompose/shallowEqual';
import avatarStyleSheet from '../style/avatars';
import getClassNames from '../internal/get-class-names';

class Avatar extends Component {
  static propTypes = {
    image: PropTypes.node.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        avatar: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {}
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'avatar', 'Avatar');

    this.state = {
      className
    };
  }

  shouldComponentUpdate(nextProps) {
    return (!shallowEqual(this.props, nextProps));
  }

  render() {
    const { image } = this.props;
    const { className } = this.state;

    const style = {
      backgroundImage: `url(${image})`
    };

    return (
      <section style={style} className={className} />
    );
  }
}

export default injectSheet(avatarStyleSheet)(Avatar);
