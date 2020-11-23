/**
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {Number} max The max number for the random number generator to generate, between 0 & max.
 */

// Start of code 👇
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default getRandomInt;
