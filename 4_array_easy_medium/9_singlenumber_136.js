/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}

for (let i of nums) {
    if (obj[i]) {
        obj[i] += 1
    } else {
        obj[i] = 1
    }
}

for (let key in obj) {
    if(obj[key]==1){
        return Number(key)
    }
   
}

};

// first approach

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
 let xor=0;
 for(let i=0;i<nums.length;i++){
    xor=xor^nums[i]
    
 }
 return xor

};

// second approachss