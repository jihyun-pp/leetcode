/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    var output = s.split(' ').reverse();
    output = output.filter(x=> x != '');
    return output.join(' ');
};