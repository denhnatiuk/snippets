/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (mapIndex.has(nums[i])) {
            return [mapIndex.get(nums[i]), i];
        }
        mapIndex.set(target - nums[i], i);
    }
    return false;
};

// Brute force
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
// Two pass hash-table
var twoSum = function(nums, target) {
    const indices = {};

    nums.forEach((item, index) => {
        indices[item] = index
    });

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices[complement] !== undefined && indices[complement] !== index) {
            return [index, indices[complement]]
        }
    }
};
// One pass hash-table
var twoSum = function(nums, target) {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices.has(complement)) {
            return [indices.get(complement), index]
        }

        indices.set(nums[index], index)
    }
};
