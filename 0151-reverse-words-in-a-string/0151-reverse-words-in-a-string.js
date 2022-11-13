const reverseWords = function(s) {
    var output = s.split(' ').reverse().filter(x=> x != '');
    return output.join(' ');
};