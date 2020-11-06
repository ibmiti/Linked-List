// pseudo code describing a linked list

const basket = ['apples' , 'grapes', 'pears'];

// linked list: apples --> grapes --> pears 

// apples
// 8947 --> grapes 
//          8742 --> pears 
//                   372 --> null 


let obj1 = { a: true};
// this is a reference to the obj, which makes it a pointer to the object
let obj2 = obj1; 
//changing the pointer 'obj2'
obj1.a = 'foo';
//output: pointer ( obj2 ) should now direct to obj1.a == 'foo'

// this will delete the original object however the pointer will still hold the value it once pointed to
delete obj1

console.log('1',obj1); // undefined
console.log('2', obj2); // true