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
var insertGreatestCommonDivisors = function(head) {
  let cur = head;
  
  while (cur.next) {
    let next = cur.next;
    let gcd = findGCD(cur.val, next.val);
    const newNode = new ListNode(gcd)
    cur.next = newNode;
    newNode.next = next;
    
    cur = next;
  }
    
  function findGCD(a, b) {
    if (!b) {
      return a;
    }

    return findGCD(b, a % b);
  }
  
  return head;
};