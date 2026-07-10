class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        nums.sort((a, b) => a - b);
        let i = 0;
        let boolean = false;
        let savedNum;

        while (i < nums.length) {
            if (savedNum === undefined) {
                savedNum = nums[i];
                i++;
            } else if (savedNum !== nums[i]) {
                savedNum = nums[i];
                boolean = false;
                i++;
            } else {
                boolean =  true;
                break;
            }
        }
        return boolean
    }
}
