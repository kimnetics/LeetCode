// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let reverseHead = null

  let temp
  while (head != null) {
    temp = head
    head = head.next
    temp.next = reverseHead
    reverseHead = temp
  }

  return reverseHead
};