class Solution {
    public int[] plusOne(int[] digits) {
        boolean carry = true;
        for (int i = digits.length - 1; i >= 0; i--) {
            int number = digits[i];
            if (carry) {
                number++;
                if (number > 9) {
                    number = number - 10;
                } else {
                    carry = false;
                }
                digits[i] = number;
            } else {
                break;
            }
        }

        if (carry) {
            int[] output = new int[digits.length + 1];
            output[0] = 1;
            return output;
        } else {
            return digits;
        }
    }
}