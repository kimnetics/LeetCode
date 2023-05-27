/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        List<Integer> outputDigits = new ArrayList<>();

        boolean carry = false;

        // Loop until we go through all digits of both lists.
        ListNode node1 = l1;
        ListNode node2 = l2;
        boolean l1Done = false;
        boolean l2Done = false;
        while (!l1Done || !l2Done) {
            // Add current digit to output and determine whether to carry.
            int digitTotal = node1.val + node2.val + ((carry) ? 1 : 0);
            if (digitTotal > 9) {
                carry = true;
                outputDigits.add(digitTotal - 10);
            } else {
                carry = false;
                outputDigits.add(digitTotal);
            }

            // Get next node from list 1.
            if (node1.next == null) {
                l1Done = true;
                node1 = new ListNode(0);
            } else {
                node1 = node1.next;
            }

            // Get next node from list 2.
            if (node2.next == null) {
                l2Done = true;
                node2 = new ListNode(0);
            } else {
                node2 = node2.next;
            }
        }

        // If present, handle last carry.
        if (carry) {
            outputDigits.add(1);
        }

        // Build output list.
        ListNode currentNode = null;
        ListNode lastNode = null;
        for (int i = outputDigits.size() - 1; i >= 0; i--) {
            currentNode = new ListNode(outputDigits.get(i), lastNode);
            lastNode = currentNode;
        }

        return currentNode;
    }
}