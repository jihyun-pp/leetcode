/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var return_data = [];    
    for(var idx=1; idx < nums.length+1; idx++){
        var sum = 0;
        for(var idx2 = 0; idx2 < idx; idx2++){
            sum += nums[idx2];
        }
        return_data.push(sum);
    }
    
    return return_data;
};