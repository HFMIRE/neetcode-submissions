class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    //brute force - nested loop
    twoSum(nums: number[], target: number): number[] {
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[i] + nums[j] === target) {
        //             return [i, j];
        //         }
        //     }
        // }
        // two pointer - using two pointer to incemental search the loop for sum of the target  - wont pass because the test are unsorted therefore wont work with the index
        // let left = 0;
        // let right = nums.length - 1;

        // while (left < right) {
        //     if (nums[left] + nums[right] > target) {
        //         right--;
        //     } else if (nums[left] + nums[right] < target) {
        //         left++;
        //     } else {
        //         return [left, right];
        //     }
        // }

        // HashMap
        // store each value + index in the hash map
        // then nums[i] - target = x , then find x in the hash map
        // if x is not in the hash, then add nums[i] in the hash, continue
        // if x is in the hash, then return postion of x in hash and i

        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let x = target - nums[i];
            if (map.has(x)) {
                return [map.get(x), i];
            } else {
                map.set(nums[i], i);
            }
        }
    }
}
