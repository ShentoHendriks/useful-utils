/**
 * Makes a string url-friendly.
 * @param {string} input 
 * @returns {input} input with spaces replaced with dashes, and without special
 * symbols that are url-friendly.
 */
export function makeUrlFriendly(input) {
  return input.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
}