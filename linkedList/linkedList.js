// A simple javascript program to introduce a linked list
/* Linked list Node. This inner class is made so that
main() can access it */
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  } // Constructor
}
/* method to create a simple linked list with 3 nodes*/
let head = new Node(1);
let second = new Node(2);
let third = new Node(3);

head.next = second; // Link first node with the second node
second.next = third; // Link second node with the third node

function printList(){
    let n=head
    while(n!=null){
        console.log(n.data)
        n = n.next
    }
}

printList()