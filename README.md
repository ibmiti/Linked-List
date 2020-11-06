# Linked-List

Javscript does not natively come shipped with the data type linked list 

So we will build it

Q : What is a linked list? :

A: a list that is linked, contains a set of nodes 
   [value|pointer(address) of next node]
    linked list are null-terminated
A2: A linked-list is a linear data structure, in which the elments are not stored at a sequential memory location.

Q: what makes them so linked if they are not sequentially stored in memory? 
A: Pointers: these pointers variables/nodes always point to the next member of the list - making them linked by states 

Q: What are the states of the pointer nodes?
A: not null, null 

Q: What does a not null pointer indicate? :
A: That there is yet another set of nodes to traverse to within this linked-list structure

Q: What does a null pointer indicate?:
A: That there is no more nodes to traverse to and that the list is at an end 

Q: is this last node given a name within the structure?:
A: just as the first node with data is referred to as HEAD - the last is TAILS

Q: what is null-terminated? :
A:which means when null is identified withink a linked-list it is thus the tail, and the tail is the end ( tail-end ) of the linked list


::Statement :: there are two types of Linked List 

Q: What are the two types? :
A: 1.)Singly Linked List, 2.)Doubly Linked list 


Q: What does the Linked list look like? : 
A:  
    
    [head:A|data ][next]-->[B ][]-->[c ][]-->[D ][]-->null|tail


            