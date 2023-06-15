class Solution {
    public int divide(int dividend, int divisor) {
        if (dividend == Integer.MIN_VALUE && divisor == -1) {
            return Integer.MAX_VALUE;
        }
        if (dividend == Integer.MIN_VALUE && divisor == 1) {
            return Integer.MIN_VALUE;
        }

        boolean negative = dividend < 0 ^ divisor < 0;

        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);

        int quotient = 0;
        int unit;

        while (dividend - divisor >= 0) {
            unit = 0;
            while (dividend - (divisor << (unit + 1)) >= 0) {
                unit++;
            }

            quotient += 1 << unit;
            dividend -= divisor << unit;
        }

        return negative ? -quotient : quotient;
    }
}