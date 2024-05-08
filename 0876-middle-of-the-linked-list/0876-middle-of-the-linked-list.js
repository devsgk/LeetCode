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
var middleNode = function(head) {
  let length = 0;
  let middleIndex;
  let cur = head;
  let count = 0;
  let answer;
  
  while (cur) {
    cur = cur.next;
    length++;
  }
  
  middleIndex = length % 2 === 0 ? (length / 2) + 1 : parseInt(length / 2) + 1;
  
  while (count < middleIndex) {
    answer = head;
    head = head.next;
    count++;
  }
  
  return answer;
};