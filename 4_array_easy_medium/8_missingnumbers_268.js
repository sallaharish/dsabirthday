/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let length= nums.length;
    let total=0
    for(let i=0;i<length;i++){
        total+=nums[i]
    }
    return length*(length+1)/2 - total
};