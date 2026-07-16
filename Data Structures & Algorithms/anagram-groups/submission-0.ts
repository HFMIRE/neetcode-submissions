class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // anagram - becuase each word will be made of the same letter
        // i need to check if the first word i get is the same in any other letter
        // that will be the way i classify and group it
        //for each word, build the 26-array, join it into a key, push the word into the map's bucket for that key, and at the end return the buckets.
        const map = {};
        let i = 0;
        let j = 0;
        let newKey;

        while (i < strs.length) {
            let arr = new Array(26).fill(0);
            let j = 0;
            while (j < strs[i].length) {
                let idx = strs[i][j].charCodeAt(0) - 97;
                arr[idx]++;
                j++;
            }

            newKey = arr.join();
            if (!(newKey in map)) {
                map[newKey] = [];
            }
            map[newKey].push(strs[i]);

            i++;
        }
        return Object.values(map);
    }
}
