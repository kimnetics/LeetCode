class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int nums1Length = nums1.length;
        int nums2Length = nums2.length;

        int totalNumberOfElements = nums1Length + nums2Length;
        boolean even = totalNumberOfElements % 2 == 0;

        int numberToSkip = totalNumberOfElements / 2;
        if (even) numberToSkip--;

        int num1Index = 0;
        int num2Index = 0;
        int skipCount = 0;
        while (skipCount < numberToSkip) {
            if (num1Index >= nums1Length) {
                num2Index++;
            } else if (num2Index >= nums2Length) {
                num1Index++;
            } else if (nums1[num1Index] < nums2[num2Index]) {
                num1Index++;
            } else {
                num2Index++;
            }

            skipCount++;
        }

        int medianNumber1;
        int medianNumber2;
        if (num1Index >= nums1Length) {
            medianNumber1 = nums2[num2Index];
            num2Index++;
        } else if (num2Index >= nums2Length) {
            medianNumber1 = nums1[num1Index];
            num1Index++;
        } else if (nums1[num1Index] < nums2[num2Index]) {
            medianNumber1 = nums1[num1Index];
            num1Index++;
        } else {
            medianNumber1 = nums2[num2Index];
            num2Index++;
        }

        if (even) {
            if (num1Index >= nums1Length) {
                medianNumber2 = nums2[num2Index];
                num2Index++;
            } else if (num2Index >= nums2Length) {
                medianNumber2 = nums1[num1Index];
                num1Index++;
            } else if (nums1[num1Index] < nums2[num2Index]) {
                medianNumber2 = nums1[num1Index];
                num1Index++;
            } else {
                medianNumber2 = nums2[num2Index];
                num2Index++;
            }

            return ((double) medianNumber1 + (double) medianNumber2) / 2.0;
        } else {
            return medianNumber1;
        }
    }
}