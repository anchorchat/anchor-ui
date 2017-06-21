import combineStyles from './combine-styles';

const getPopOverPosition = (button, popOver, type = 'iconMenu') => {
  const fitsAboveButton = button.top > popOver.height;
  const fitsRightFromButton = (window.innerWidth - button.right) > popOver.width;
  const fitsLeftFromButton = button.left > popOver.width;
  const fitsBelowButton = (window.innerHeight - button.bottom) > popOver.height;

  let horizontal = 'left';
  let vertical = 'bottom';

  if (fitsRightFromButton && !fitsLeftFromButton) {
    horizontal = 'right';
  }

  if (!fitsRightFromButton && !fitsLeftFromButton) {
    horizontal = 'middle';
  }

  if (fitsAboveButton && !fitsBelowButton) {
    vertical = 'top';
  }

  let position = {
    position: 'fixed'
  };

  if (vertical === 'bottom') {
    position = combineStyles(position, { top: button.top + button.height, bottom: 'initial' });
  }

  if (vertical === 'top') {
    position = combineStyles(position, { top: 'initial', bottom: (window.innerHeight - button.bottom) + button.height });
  }

  if (horizontal === 'left') {
    position = combineStyles(position, { left: 'initial', right: (window.innerWidth - button.right) + (button.width / 2) });
  }

  if (horizontal === 'right') {
    position = combineStyles(position, { left: button.left + (button.width / 2), right: 'initial' });
  }

  if (horizontal === 'middle') {
    position = combineStyles(position, { left: 'initial', right: (button.right - (popOver.width / 2)) - (button.width / 2) });
  }

  if (type === 'select') {
    position = combineStyles(position, { left: 'initial', right: 'initial' });
  }

  return position;
};

export default getPopOverPosition;
