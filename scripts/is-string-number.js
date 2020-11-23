/**
 *
 * @param {String} str String to check if it's a number
 */

function isStringNumber(str) {
  if (typeof str != "string") return false; // we only process strings!

  const isNumber = +str; // Transform it into a number, should either return a number or NaN.
  // If it's a number return true, if NaN return false

  if (typeof isNumber === Number) {
    return true;
  } else {
    return false;
  }
}

export default isStringNumber;
