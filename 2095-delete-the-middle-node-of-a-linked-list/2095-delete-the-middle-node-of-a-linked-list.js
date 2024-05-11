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
var deleteMiddle = function(head) {
  let length = 0;
  let cur = head;
  
  while (cur) {
    length++;
    cur = cur.next;
  }
  
  if (length - 1 === 0) {
    return null
  }
  
  const middle = Math.ceil((length - 1) / 2);
  let count = 0;
  let cur2 = head;
  let prev = cur2
  
  while (count < middle) {
    prev = cur2;
    cur2 = cur2.next;
    count++;
  }
  
  let next = cur2.next;
  prev.next = next;
  
  return head;
};