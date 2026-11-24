// makefun-site's text rules: the HTML escape table, the slug rule and the long date (README.md, "Text").

/** The HTML escape table, in this order: & < > " ' (README.md). */
const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** `text` with & < > " and ' escaped. */
export function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

/** The most characters a slug keeps before a collision suffix. */
export const SLUG_MAX = 64;

/**
 * The slug of `text`: NFKD, combining marks dropped, A-Z lowered, every run of characters other than a-z and 0-9 one
 * "-", none at either end, at most SLUG_MAX characters (a "-" left at the cut dropped), and "untitled" when nothing is
 * left.
 */
export function slugify(text) {
  const plain = /[^\x00-\x7f]/.test(text) ? text.normalize('NFKD').replace(/\p{M}/gu, '') : text;
  const key = plain.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, SLUG_MAX);
  return (key.endsWith('-') ? key.slice(0,-1) : key) || 'untitled';
}

/** `slug` made unique against `taken` (and added to it): the first of slug, slug-2, slug-3 ... not taken. */
export function uniqueSlug(slug, taken) {
  let out = slug;
  for (let n = 2; taken.has(out); n++) out = `${slug}-${n}`;
  taken.add(out);
  return out;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** A YYYY-MM-DD date in words, from the string alone: "2026-11-09" is "9 November 2026". */
export function longDate(date) {
  return Number(date.slice(8)) + ' ' + MONTHS[Number(date.slice(5,7)) - 1] + ' ' + date.slice(0,4);
}
