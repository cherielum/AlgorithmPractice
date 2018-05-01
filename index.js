//Given a sorted array nums, remove the duplicates in-place such that each element appear only once
// and return the new length.

//Do not allocate extra space for another array, you must do this by
//modifying the input array in-place with O(1) extra memory.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var removeDuplicates = function(nums) {
  for (var i = 0; i < nums.length-1; i++) {
    var duplicate = nums[i] === nums[i + 1];
     if (duplicate) {
       nums.splice(i,1);
       i = i-1;
     }
  }
};

