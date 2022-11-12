/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b);
    let leftSum = 0;
    let pivot = 0;
    
    for(var i = 0; i < nums.length; i++){
        pivot = i;
        total -= nums[i];
        if(total == leftSum)
            return pivot;
        leftSum += nums[i];
    }
    return -1;
};