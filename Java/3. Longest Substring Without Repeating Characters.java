class Solution {
    public int lengthOfLongestSubstring(String s) {
        int longestLength = 0;

        char[] characters = s.toCharArray();
        int charactersLength = characters.length;

        int start = 0;
        for (int i = 0; i < charactersLength; i++) {
            // Check if character is in substring.
            int matchingCharacter = -1;
            for (int j = start; j < i; j++) {
                if (characters[j] == characters[i]) {
                    matchingCharacter = j;
                    break;
                }
            }

            // Is character in substring?
            if (matchingCharacter != -1) {
                // Check if substring is new max.
                int substringLength = i - start;
                if (substringLength > longestLength) {
                    longestLength = substringLength;
                }

                // Set new start.
                start = matchingCharacter += 1;
            }
        }

        // Check if last substring is new max.
        if ((charactersLength - start) > longestLength) {
            longestLength = charactersLength - start;
        }

        return longestLength;
    }
}