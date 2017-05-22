const combineStyles = (style, overrideStyle) => {
  if (overrideStyle && Object.keys(overrideStyle).length !== 0) {
    return {
      ...style,
      ...overrideStyle
    };
  }

  return style;
};

export default combineStyles;
