class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let lengthNums = nums.length
        const newArr = new Array(2 * lengthNums )
        let i = 0 
       while (i < lengthNums) {
        newArr[i] = nums[i]
        newArr[i + lengthNums] = nums[i]
        i++
        }
        return newArr
    }
}
