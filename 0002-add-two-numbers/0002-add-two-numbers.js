/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  
  while (cur1 || cur2) {
    const val1 = cur1 !== null ? cur1.val : 0;
    const val2 = cur2 !== null ? cur2.val : 0;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (cur1 !== null) cur1 = cur1.next;
    if (cur2 !== null) cur2 = cur2.next;
  }
  
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  
  return dummyHead.next;
};