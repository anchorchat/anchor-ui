import Color from 'color';

const fade = (color, amount) => Color(color).fade(amount).string();

export default fade;
