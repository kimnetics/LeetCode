class Solution {
    public int removeDuplicates(int[] nums) {
        int index = 1;
        int numsLength = nums.length;
        for (int i = 1; i < numsLength; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[index] = nums[i];
                index++;
            }
        }

        return index;
    }
}