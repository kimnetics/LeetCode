// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;
        int first = findTarget(nums, target, low, high);
        if (first < 0) {
            return new int[]{-1, -1};
        }
        int last = first;

        // Find first position.
        high = first - 1;
        while (low <= high) {
            int results = findTarget(nums, target, low, high);
            if (results >= 0) {
                first = results;
            } else {
                break;
            }
            high = first - 1;
        }

        // Find last position.
        low = last + 1;
        high = nums.length - 1;
        while (low <= high) {
            int results = findTarget(nums, target, low, high);
            if (results >= 0) {
                last = results;
            } else {
                break;
            }
            low = last + 1;
        }

        return new int[]{first, last};
    }

    public int findTarget(int[] nums, int target, int low, int high) {
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
}
