class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(newItem, existingItem){
    if(this.head === null){
      this.insertFirst(newItem);
    }
    let currNode = this.head;
    let prevNode = this.head;

    while(currNode.value !== existingItem.value) {
      prevNode = currNode;
      currNode = currNode.next;
      if (currNode.next === null){
        console.log('item not found!');
        return;
      }
    }
    // A -> B -> D
    prevNode.next = new _Node(newItem, currNode);
  }

  // A -> B -> D
  insertAfter(newItem, existingItem){
    if(this.head === null){
      this.insertFirst(newItem);
    }
    let currNode = this.head;
    //let nextNode = this.head;

    while(currNode.value !== existingItem.value){
      currNode = currNode.next;

      if(currNode.next === null){
        console.log('item not found!');
        return;
      }
    }
    currNode.next = new _Node(newItem, currNode.next);
  }
  //  A - C - D
  //input: insertAt(2) e.g - insert B at position 2
  //output: A - B - C - D
  insertAt(position, newItem) {
    if(this.head === null){
      this.insertFirst(newItem);
    }
    if(position === 0) {
      this.insertFirst(newItem);
    }
    //Create a counter to count the iterations
    let counter = 0;
    let currNode = this.head;

    while(counter !== position) {
      currNode = currNode.next;
      counter++;

      if(currNode.next === null){
        console.log('item not found!');
        return;
      }
    }
    this.insertBefore(newItem, currNode);
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head){
      return null;
    }
    //Check for the item
    while(currNode.value !== item) {
      //return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item){
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = linkedList;
