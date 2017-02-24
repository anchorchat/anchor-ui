import combineStyles from './combine-styles';

function getPopOverPosition(button, popOver) {
  const fitsAboveButton = button.top > popOver.height;
  const fitsRightFromButton = (window.innerWidth - button.right) > popOver.width;
  const fitsLeftFromButton = button.left > popOver.width;
  const fitsBelowButton = (window.innerHeight - button.bottom) > popOver.height;

  let horizontal = 'left';
  let vertical = 'bottom';

  if (fitsRightFromButton && !fitsLeftFromButton) {
    horizontal = 'right';
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

  return position;
}

export default getPopOverPosition;
