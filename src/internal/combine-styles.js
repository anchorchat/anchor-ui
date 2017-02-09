function combineStyles(style, overrideStyle) {
  if (Object.keys(overrideStyle).length !== 0) {
    return Object.assign(style, overrideStyle);
  }

  return style;
}

export default combineStyles;
