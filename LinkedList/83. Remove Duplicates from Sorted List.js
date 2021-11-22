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

// visualize
/**




 */


var deleteDuplicates = function (head) {

    let cur = head;

    while (cur && cur.next) {
        let nextNextNode = cur.next.next;
        if (cur.val === cur.next.val) {
            cur.next.next = null;
            cur.next = nextNextNode;
        }
        cur = cur.next;
    }
    return head;

};



var deleteDuplicates = function (head) {

    let cur = head;
    let prev = null;

    while (head) {
        if (prev && prev.val === cur.val) {

            prev.next = cur.next


        } else {
            prev = cur;
        }
        head = cur.next;

    }
    return prev;

};



var deleteDuplicates = function (head) {

    let cur = head;
    let prev = null;
    while (head) {
        if (head.val === prev.val) {
            prev.next = head.next;
        }


    }
    return cur;

};