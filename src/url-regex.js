/* eslint no-useless-escape: [0] */
// https://github.com/lukechilds/my-name-is-url
import tlds from 'tlds';

// Reusables
const validTlds = tlds.concat(['local', 'dev']).join('|');
const escapeChar = '\\';
const notWhitespaceCommaDoubleQuoteOrDot = `[^${escapeChar}s"]`;
const dot = `${escapeChar}.`;
const hostnameChars = '[a-z0-9]';
const number = '[0-9]';
const endingChars = `${dot}?([${escapeChar}s<>",]|$)`;

// Sections
const optionalScheme = '(?:(?:ht|f)tps?:\/\/)?';
const hostname = `(((${hostnameChars}-*)*${hostnameChars}+)${dot})+(${validTlds})`;
const ip = `(${number}{1,3}${dot}){3}${number}{1,3}`;
const optionalPortNumber = `(:${number}+)?`;
const optionalSlash = `(${escapeChar}/(${notWhitespaceCommaDoubleQuoteOrDot}*)?)?`;
const endsWithButDontMatch = `(?=${endingChars})`;

// Build
const regex = `${optionalScheme}(localhost|${hostname}|${ip})${optionalPortNumber}${optionalSlash}${endsWithButDontMatch}`;

export default new RegExp(regex, 'gi');
