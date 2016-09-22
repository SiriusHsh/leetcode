/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        if(nums[j] !== val) {
            var temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
        }
    }
    return i;
};
