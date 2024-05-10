/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let head = list1;
  let cur = list1;
  let count = 0;
  
  while (count !== b) {
    cur = cur.next;
    count++;
  }
  
  let next = cur.next;
  count = 0;
  cur = list1;
  
  while (count !== a - 1) {
    cur = cur.next;
    count++;
  }
  
  cur.next = list2;
  
  let cur2 = list2;
  
  while (cur2.next) {
    cur2 = cur2.next;
  }
  
  cur2.next = next;
  return head;
};