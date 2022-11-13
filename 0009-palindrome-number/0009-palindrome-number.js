/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var z = String(x).split('').reverse().join('');
    return (parseInt(z) === x);
};