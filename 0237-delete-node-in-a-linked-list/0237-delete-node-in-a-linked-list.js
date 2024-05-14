/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  let cur = node;
  let next;
  
  while (cur && cur.next) {
    next = cur.next;
    cur.val = next.val;
    
    if (!cur.next.next) {
      const lastNode = cur.next.next;
      cur.next = lastNode;
      return;
    }
      
    cur = next;
  }
};