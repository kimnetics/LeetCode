// https://leetcode.com/problems/group-anagrams/
var groupAnagrams = function(strs) {
  const output = new Map

  for (const str of strs) {
    const strSorted = str.split('').sort().join('')
    if (!output.has(strSorted)) {
      output.set(strSorted, [str])
    } else {
      output.get(strSorted).push(str)
    }
  }

  return Array.from(output.values())
};
