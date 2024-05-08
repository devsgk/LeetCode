/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let cur = head;
  let binary = "";
  
  while (cur) {
    binary += cur.val;
    cur = cur.next;
  }
  
  return parseInt(binary, 2)
};