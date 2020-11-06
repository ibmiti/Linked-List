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
    // print total linked list
    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    // insert at specific index
    insert(index, value){
        // check params 
        // if given index is greater than the length of list 
        if (index >= this.length){
            // just add value to end of the list
            return this.append(value)
        }
        const newNode = {
            value: value,
            next : null
        };
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        // keep traversing until we get to index
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    // remove at index of given
    remove(index){
        // check the params for ( pos num , is index given more than length of list )
        if (index >= this.length){
            // just add value to end of the list
            return this.append(value)
        }
        const leader = this.traverseToIndex(index - 1);
        // get reference to node we want to unwanted node
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        // decrement length of list 
        this.length--;
        return this.printList();
    }
}

//initiate new copy of Linkedlist
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2,10);
myLinkedList.remove(2);