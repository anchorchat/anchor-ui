import Color from 'color';

function fade(color, amount) {
  return Color(color).fade(amount).string();
}

export default fade;
