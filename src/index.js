module.exports = function reverse(n) {
  // let reverseString = n.toString();

  let absNumber = Math.abs(n);

  let reverseNumber = absNumber.toString().split("").reverse().join("");

  return Number(reverseNumber);
};
