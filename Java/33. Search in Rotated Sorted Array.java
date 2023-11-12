// https://leetcode.com/problems/search-in-rotated-sorted-array/
class Solution {
    public int search(int[] nums, int target) {
         int rotationPoint = findRotationPoint(nums);

        int low;
        int high;
        if (rotationPoint == 0) {
            low = 0;
            high = nums.length - 1;
        } else if (nums[rotationPoint] <= target && target <= nums[nums.length - 1]) {
            low = rotationPoint;
            high = nums.length - 1;
        } else {
            low = 0;
            high = rotationPoint - 1;
        }

        while (low <= high) {
            int mid = (low + high) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }
 
    public int findRotationPoint(int[] nums) {
        int low = 0;
        int high = nums.length - 1;

        // Is there only one element or is array in sorted order?
        if (nums[0] <= nums[high]) {
            return 0;
        }

        while (low <= high) {
            int mid = (low + high) / 2;

            // Are we at rotation point?
            if (mid > 0 && nums[mid] < nums[mid - 1]) {
                return mid;
            }
            if (mid < nums.length - 1 && nums[mid + 1] < nums[mid]) {
                return mid + 1;
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