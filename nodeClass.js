// :: creating node class :: //

// this node class will remove the need to create new node within each append, prepend operation we want to give to class
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    // adding to the linked list
    append(value) {
        // using node class obj
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value); 
        this.head = newNode;
        this.length;
        return this;
    }
}

let ll = new LinkedList(10);
ll.append(15);
console.log(ll);