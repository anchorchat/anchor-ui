import Color from 'color';

function darken(color, amount) {
  return Color(color).darken(amount).string();
}

export default darken;
