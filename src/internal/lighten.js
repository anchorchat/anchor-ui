import Color from 'color';

function lighten(color, amount) {
  return Color(color).lighten(amount).string();
}

export default lighten;
