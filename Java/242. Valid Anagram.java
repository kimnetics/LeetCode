class Solution {
    public boolean isAnagram(String s, String t) {
        int sLength = s.length();
        int tLength = t.length();

        if (sLength != tLength) {
            return false;
        }

        int[] letters = new int[26];

        for (int i = 0; i < sLength; i++) {
            int index = s.charAt(i) - 97;
            letters[index]++;
        }

        for (int i = 0; i < tLength; i++) {
            int index = t.charAt(i) - 97;
            letters[index]--;
            if (letters[index] < 0) {
                return false;
            }
        }

        return true;
    }
}