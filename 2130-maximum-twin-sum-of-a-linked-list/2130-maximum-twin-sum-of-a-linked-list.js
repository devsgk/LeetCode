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
var pairSum = function(head) {
  let cur = head;
  let prev = null;
  let next;
  let length = 0;
  
  while (cur) {
    next = cur.next;
    const newNode = new ListNode(cur.val);
    newNode.next = prev;
    prev = newNode;
    cur = next;
    length++;
  }
  
  let count = 0;
  let max = 0;
  
  while (count < length / 2) {
    max = Math.max(max, head.val + prev.val);
    console.log(max);
    head = head.next;
    prev = prev.next;
    count++;
  }
  
  return max;
};