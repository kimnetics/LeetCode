// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
class Solution {
    public int garbageCollection(String[] garbage, int[] travel) {
        int totalTime = 0;

        // Calculate maximum time.
        for (String s : garbage) {
            totalTime += s.length();
        }
        for (int travelTime : travel) {
            totalTime += 3 * travelTime;
        }

        // Remove unneeded travel time.
        int garbageLength = garbage.length;
        for (int i = garbageLength - 1; i > 0; i--) {
            if (!garbage[i].contains("G")) {
                totalTime -= travel[i - 1];
            } else {
                break;
            }
        }
        for (int i = garbageLength - 1; i > 0; i--) {
            if (!garbage[i].contains("M")) {
                totalTime -= travel[i - 1];
            } else {
                break;
            }
        }
        for (int i = garbageLength - 1; i > 0; i--) {
            if (!garbage[i].contains("P")) {
                totalTime -= travel[i - 1];
            } else {
                break;
            }
        }

        return totalTime;
    }
}