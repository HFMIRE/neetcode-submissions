class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const newArr = new Array(2 *  nums.length )
        let i = 0 
       while (i < nums.length) {
        newArr[i] = nums[i]
        newArr[i + nums.length] = nums[i]
        i++
        }
        return newArr
    }
}
