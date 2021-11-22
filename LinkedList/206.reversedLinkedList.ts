class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null, previous: ListNode | null): ListNode | null {
    if (head === null) return null;

    let prev = previous || null;
    let next;

    next = head.next;
    head.next = prev;
    prev = head;
    head = next;

    return reverseList(head, prev);

};

// reverseList([1, 2, 3, 4, 5])

var reverseList = function (head) {

    if (!head) return head;

    let prev = null;
    let next;

    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;

    }
    return prev;

};


