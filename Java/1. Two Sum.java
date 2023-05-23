class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numsMap = new HashMap<>(); // <number, index>
        int numsLength = nums.length;

        numsMap.put(nums[0], 0);
        for (int i = 1; i < numsLength; i++) {
            int targetNumber = target - nums[i];
            if (numsMap.containsKey(targetNumber)) {
                return new int[]{numsMap.get(targetNumber), i};
            }
            numsMap.put(nums[i], i);
        }

        return null;
    }
}