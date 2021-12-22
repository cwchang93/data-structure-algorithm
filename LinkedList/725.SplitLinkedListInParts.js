/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let listLength = 0
    let tmp = head // [1,2,3,4,5,6,7,8,9,10]
    let ret = []

    for (let i = 0; i < k; i++) {
        ret.push(null)
    } // [null, null, null]

    while (tmp) {
        listLength = listLength + 1
        tmp = tmp.next
    }

    let partLength = Math.floor(listLength / k)
    if (partLength <= 0) partLength = 1
    let extraLength = 0
    if (listLength > k) {
        extraLength = listLength % k // 10 除以 k 的餘數 = 2
    }

    let tmp2 = null
    for (let i = 0; i < k; i++) { // [[1,2,3,4] , [5,6,7,8] , [9,10,11]]
        if (extraLength <= 0) extraLength = 0

        // 有沒有餘數，需不需要多一個
        let oneMore = 0
        if (extraLength > 0) {
            oneMore = 1
        }

        ret[i] = head
        console.log('head in ret', head);
        for (let j = 0; j < partLength + oneMore; j++) {
            tmp2 = head;

            if (head) {
                head = head.next
            }
        }
        extraLength = extraLength - 1
            // 把 tmp2 的下一個 next 截斷，然後進行下一個陣列的迴圈操作。

        if (tmp2) tmp2.next = null
            //  console.log('tmp2',tmp2);
            //    console.log('----')
    }
    return ret
};