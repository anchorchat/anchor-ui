import combineStyles from './combine-styles';

const getPopOverPosition = (button, popOver, type = 'iconMenu') => {
  const { innerWidth, innerHeight } = window;
  const halfButtonWidth = (button.width / 2);
console.log('button:\n', button, '\npopOver:\n', popOver);
console.log('innerWidth:\n', innerWidth, '\ninnerHeight:\n', innerHeight);
  const fitsAboveButton = button.top > popOver.height;
  const fitsRightFromButton = (innerWidth - button.right - halfButtonWidth) > popOver.width;
  const fitsLeftFromButton = button.left + halfButtonWidth > popOver.width;
  const fitsBelowButton = (innerHeight - button.bottom) > popOver.height;

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

  if (!fitsAboveButton && !fitsBelowButton) {
    vertical = 'middle';
  }

  let position = {
    position: 'fixed'
  };

  if (vertical === 'bottom') {
    position = combineStyles(position, { top: button.top + button.height, bottom: 'initial' });
  }

  if (vertical === 'top') {
    position = combineStyles(position, { top: 'initial', bottom: (innerHeight - button.bottom) + button.height });
  }

  if (vertical === 'middle') {
    const willCutTop = (popOver.height / 2) > (button.top + halfButtonWidth);
    const willCutBottom = (popOver.height / 2) > (innerHeight - button.bottom);

    position = combineStyles(position, { top: 'initial', bottom: (innerHeight - button.bottom - (popOver.height / 2)) + (button.height / 2) });

    if (willCutTop && !(popOver.height > innerHeight)) {
      position = combineStyles(position, { top: '16px', bottom: 'initial' });
    }

    if (willCutBottom && !(popOver.height > innerHeight)) {
      position = combineStyles(position, { top: 'initial', bottom: '16px' });
    }
  }

  if (horizontal === 'left') {
    position = combineStyles(position, { left: 'initial', right: (innerWidth - button.right) + halfButtonWidth });
  }

  if (horizontal === 'right') {
    position = combineStyles(position, { left: button.left + halfButtonWidth, right: 'initial' });
  }

  if (horizontal === 'middle') {
    console.log('middle');
    position = combineStyles(position, { left: button.right - (popOver.width / 2), right: 'initial' });
  }

  if (type === 'select') {
    position = combineStyles(position, { left: 'initial', right: 'initial' });
  }

  return position;
};

export default getPopOverPosition;
