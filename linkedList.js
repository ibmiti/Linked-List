// :::: creating linked list in js ::::

// linked list to create:
// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10, 
//         next: {
//             value : 5,
//             next: {
//                 value: 16,
//                 next: null // tails
//             }
//         }
//     }
// }

class LinkedList {
    // original list
    constructor(value){
        this.head = {
            value : value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    // append to end of list
    append(value){
        const newNode ={
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // return result of appending to end of original list
        return this;
    }
    // prepend to start of list
    prepend(value){
        // create new node
        const newNode = {
            value: value,
            next: null
        };
        // points to first node of head 
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        // return result of prepending to original list
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);