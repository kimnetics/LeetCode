class Solution {
    public int strStr(String haystack, String needle) {
        int haystackLength = haystack.length();
        int needleLength = needle.length();

        if (needleLength > haystackLength) {
            return -1;
        }

        int maxI = haystackLength - needleLength + 1;
        for (int i = 0; i < maxI; i++) {
            int iIndex = i;
            for (int j = 0; j < needleLength; j++) {
                if (haystack.charAt(iIndex) != needle.charAt(j)) {
                    break;
                }
                iIndex++;
                if ((iIndex - i) == needleLength) {
                    return i;
                }
            }
        }

        return -1;
    }
}