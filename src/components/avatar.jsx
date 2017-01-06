import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import avatarStyle from '../style/avatars';
import getClassNames from '../internal/get-class-names';

class Avatar extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        avatar: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object)
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'avatar', 'Avatar');

    this.state = {
      className
    };
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

export default injectSheet(avatarStyle)(Avatar);
