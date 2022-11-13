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
        nums.sort((a, b) => a - b);
        output = nums.indexOf(target);
    }
    return output;
};

/** 
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
* 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따름 >> 오름차순 정렬 안될 수 있음 
* 숫자 오름차순으로 정렬하고 싶으면 a-b 해야 함
*/
