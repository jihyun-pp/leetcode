/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    
    const dumy = new ListNode(0);
    let current = dumy;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            current.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        current = current.next;
    }
    
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    return dumy.next;   
};