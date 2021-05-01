class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    if (head.next === null) return head;
    let prev = null, next = null;
    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};

reverseList([1, 2, 3, 4, 5])

