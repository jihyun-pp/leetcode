/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var output = 0;
    output = nums.indexOf(target); 
    if(output === -1){
        nums.push(target);
        // nums.sort();
        nums.sort(function(a, b) {
            return a - b;
        });
        console.log(nums);
        output = nums.indexOf(target);
    }
    return output;
};