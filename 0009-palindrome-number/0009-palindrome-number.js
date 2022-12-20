/**
 * @param {number} x
 * @return {boolean}
 */

// 대칭수
var isPalindrome = function(x) {
    var z = String(x).split('').reverse().join('');
    return (parseInt(z) === x);
};
