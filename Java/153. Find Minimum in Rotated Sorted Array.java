// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
class Solution {
    public int findMin(int[] nums) {
        int low = 0;
        int high = nums.length - 1;

        // Is there only one element or is array in sorted order?
        if (nums[0] <= nums[high]) {
            return nums[0];
        }

        while (low <= high) {
            int mid = (low + high) / 2;

            // Are we at rotation point?
            if (mid > 0 && nums[mid] < nums[mid - 1]) {
                return nums[mid];
            }
            if (mid < nums.length - 1 && nums[mid + 1] < nums[mid]) {
                return nums[mid + 1];
            }

            // Are we still before rotation point?
            if (nums[mid] > nums[0]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return 0;
    }
}