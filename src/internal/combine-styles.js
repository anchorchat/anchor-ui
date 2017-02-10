function combineStyles(style, overrideStyle) {
  if (Object.keys(overrideStyle).length !== 0) {
    return {
      ...style,
      ...overrideStyle
    };
  }

  return style;
}

export default combineStyles;
