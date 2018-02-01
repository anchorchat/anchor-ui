import MobileDetect from 'mobile-detect';
import get from 'lodash/get';

const userAgent = get(get(global, 'window', {}), 'navigator.userAgent', '');

export default new MobileDetect(userAgent);
