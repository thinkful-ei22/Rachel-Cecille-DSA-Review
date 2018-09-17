const linkedList = require('./linked-list-class');

const sll = new linkedList();

function main() {
  sll.insertFirst(1);
  sll.insertLast(2);
  sll.insertLast(3);
  sll.insertLast(3);
  sll.insertLast(4);
  sll.insertLast(5);
  sll.insertLast(5);
  sll.insertLast(6);
  sll.insertLast(7);
  sll.insertLast(7);
  sll.insertLast(8);
  sll.insertLast(9);
  sll.insertLast(10);
  console.log('This is the pretty list', JSON.stringify(sll, null, 2));
}

main();

//Remove duplicated numbers from a sorted linked linkedList

//If it's sorted...we need only to compare if the previousNode and currentNode
//have the same value

//If they do - we have to point the previousNode's next pointer one over

function removeDuplicates(list) {
  let currNode = list.head;
  let prevNode = list.head;

  while(currNode.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;

    if(prevNode.value === currNode.value) {
      prevNode.next = currNode.next;
    }
  }
  return list;
}

console.log('This is the product', JSON.stringify(removeDuplicates(sll), null, 2));
