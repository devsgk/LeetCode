/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const set = new Set();

  while (head !== null) {
    if (set.has(head)) return true;

    set.add(head);
    head = head.next;
  }

  return false;
};
