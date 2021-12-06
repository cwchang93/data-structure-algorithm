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
 * 
 * head = [1,2,3,4]
 * [2,1,4,3]
 * 
 */

// 直接換值
var swapPairs = function(head) {

    if (head === null || head.next === null) return head;
    let prev = head;
    let cur = head.next;
    while (prev != null && cur != null) {
        let tmp = prev.val;
        prev.val = cur.val;
        cur.val = tmp;
        if (cur.next === null || cur.next.next === null) break;
        prev = cur.next;
        cur = cur.next.next
    }

    return head;

};

/*

var swapPairs = function(head) {
    let thead = new ListNode(0); // 0
    thead.next = head; // 0 -> 1
    let tmp = thead; // 0
    while(tmp.next != null && tmp.next.next != null){
        let start = tmp.next; // 1
        let end = start.next; // 2
        tmp.next = end; // 0 -> 2
        start.next = end.next; // 1 -> 3
        end.next = start; // 2 -> 1
        tmp = start;
    }
    return thead.next;
};


var swapPairs = function(head) {
    if (!head || !head.next) return head; 
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};

*/

/**

 var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let [fst, snd] = [head, head.next];
    [fst.next, snd.next] = [swapPairs(snd.next), fst];
    return snd;
};
 */