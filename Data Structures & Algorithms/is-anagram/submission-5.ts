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
        // for (let i = 0; i < s.length; i++) {
        //     if (sMap.has(s[i])) {
        //         sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
        //     } else {
        //         sMap.set(s[i], 1);
        //     }
        // }
        // for (let j = 0; j < t.length; j++) {
        //     if (tMap.has(t[j])) {
        //         tMap.set(t[j], (tMap.get(t[j]) ?? 0) + 1);
        //     } else {
        //         tMap.set(t[j], 1);
        //     }
        // }
        // if (tMap.size != sMap.size) {
        //     return false;
        // } else {
        //     for (const [char, count] of sMap) {
        //         if (tMap.get(char) != count) {
        //             return false;
        //         }
        //     }
        //     return true;
        // }

        //optimising reducing the loop to single one
        // if (s.length !== t.length) return false;
        // while (i < t.length) {
        //     if (tMap.has(t[i])) {
        //         tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
        //     } else {
        //         tMap.set(t[i], 1);
        //     }

        //     if (sMap.has(s[i])) {
        //         sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
        //     } else {
        //         sMap.set(s[i], 1);
        //     }
        //     i++;
        // }
        // if (tMap.size != sMap.size) {
        //     return false;
        // } else {
        //     for (const [char, count] of sMap) {
        //         if (tMap.get(char) != count) {
        //             return false;
        //         }
        //     }
        //     return true;
        // }

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
