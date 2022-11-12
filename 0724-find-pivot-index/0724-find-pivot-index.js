// Find Pivot Index
// Pivot Index : 해당 인덱스를 기준으로 오른쪽 배열의 값들의 합과 왼쪽 배열의 값들이 합이 같은 경우
const pivotIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b);
    let leftSum = 0;
    
    for(var p = 0; p < nums.length; p++){
        total -= nums[p];
        if(total == leftSum) return p;
        leftSum += nums[p];
    }
    return -1;
};