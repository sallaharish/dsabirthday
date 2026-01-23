/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count=0
    let maxnum=0
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count=count+1
          
        }
        else{
             maxnum= count>maxnum ? count:maxnum
            count=0
        }

    }
    return  maxnum= count>maxnum ? count:maxnum
};