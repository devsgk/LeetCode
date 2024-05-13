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
var mergeNodes = function(head) {
  let cur = head;
  let sum = 0;
  let newList = new ListNode(0);
  let newHead = newList;
  
  while (cur) {
    if (cur.val === 0) {
      if (sum !== 0) {
        newHead.next = new ListNode(sum);
        newHead = newHead.next;
      }
      
      sum = 0;
    } else {
      sum += cur.val;
    }
    
    cur = cur.next;
  }
  
  return newList.next;
}