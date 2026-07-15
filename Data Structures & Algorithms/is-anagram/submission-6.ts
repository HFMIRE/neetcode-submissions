class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // hash map
        // need to count how many of each letter  - if the same amount of letter for each value then it is anagram
        // need to loop using while loop - then tally up the value then
        // validate if the same size and each key is the same number

        let map = new Map();
        let i = 0;

        // there is a better way of doing - think of a tally
        if (s.length != t.length) return false;
        while (i < t.length) {
            map.set(t[i], (map.get(t[i]) ?? 0) + 1);
            map.set(s[i], (map.get(s[i]) ?? 0) - 1);
            i++;
        }

        for (const count of map.values()) {
            if (count !== 0) return false;
        }

        return true;
    }
}
