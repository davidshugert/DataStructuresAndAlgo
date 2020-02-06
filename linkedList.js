class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // My Solution
    // let currentNode = this.head;
    // while (currentNode.next) {
    //   currentNode = currentNode.next;
    // }
    // currentNode.next = {
    //   value,
    //   next: null
    // };
    // this.tail = currentNode.next;
    // this.length++;
    const newNode = {
      value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value,
      next: this.head
    };
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }
    let currIdx = 1;
    let currentNode = this.head;
    while (currIdx < index) {
      currentNode = currentNode.next;
      currIdx++;
    }
    const newNode = {
      value,
      next: null
    };
    const holdingPointer = currentNode.next;
    currentNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  delete(index) {
    let currIdx = 1;
    let currentNode = this.head;
    while (currIdx < index - 1) {
      currentNode = currentNode.next;
      currIdx++;
    }
    const unwantedNode = currentNode.next;
    currentNode.next = unwantedNode.next;
    this.length--;
    return this;
  }
  //Interview Question
  reverse() {
    let currentNode = this.head.next;
    let reverseList = {
      value: this.head.value,
      next: null
    };
    while (currentNode) {
      reverseList = {
        value: currentNode.value,
        next: reverseList
      };
      currentNode = currentNode.next;
    }
    return reverseList;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0, 7);
console.log(myLinkedList.printList());
myLinkedList.delete(2);

myLinkedList.delete(2);

console.log(myLinkedList.printList());
console.log(myLinkedList.reverse())
