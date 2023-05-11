class Solution {
    static List<String> result;

    public List<String> generateParenthesis(int n) {
        result = new ArrayList<>();
        add_parenthesis("", n, n);
        return result;
    }

    void add_parenthesis(String item, int left, int right) {
        if ((left == 0) && (right == 0)) {
            result.add(item);
        }

        if (left > 0) {
            add_parenthesis(item + '(', left - 1, right);
            if (right > left) {
                add_parenthesis(item + ')', left, right - 1);
            }
        } else if (right > 0) {
            add_parenthesis(item + ')', left, right - 1);
        }
    }
}