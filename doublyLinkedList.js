class doublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value,
      next: this.head,
      prev: null
    };
    this.head.prev = newNode;
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
      next: null,
      prev: null
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
}

const myLinkedList = new doublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0, 7);
console.log(myLinkedList.printList());
myLinkedList.delete(2);
console.log(myLinkedList.printList());
