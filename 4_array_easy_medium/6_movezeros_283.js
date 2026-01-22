/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let position=0
    for(let i=0;i<nums.length;i++){
      if(nums[i]!==0){
        nums[position]=nums[i]
        position=position+1
      }
    }

    // /for making remaing non zero elements to making it zero
    for(let i=position;i<nums.length;i++){
     nums[i]=0
    }

};