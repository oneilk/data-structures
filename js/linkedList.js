class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // add a node to the front of the list
  unshift(value) {
    // create new node
    const newNode = new Node(value);

    // if list is empty: set head and tail to new node
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set new node's next to current head
      newNode.next = this.head;

      // set the current head's prev to new node
      this.head.prev = newNode;

      // set list's head to new node
      this.head = newNode;
    }

    // increase length by 1
    this.length += 1;

    // return new node
    return newNode;
  }

  // remove node from the beginning of the list
  shift() {
    // we can't remove data from an empty list
    if (!this.length) {
      return null;
    }

    // set head as nodeToRemove
    const nodeToRemove = this.head;

    if (this.length === 1) {
      // after removing the only element, the list will be empty, so `head` and `tail` should be `null`
      this.head = null;
      this.tail = null;
    } else {
      // the node after the nodeToRemove should become the new head
      this.head = nodeToRemove.next;

      // remove both connections from the new head to the old head (= nodeToRemove)
      this.head.prev = null;
      nodeToRemove.next = null;
    }

    // decrease length by 1
    this.length -= 1;

    // return nodeToRemove
    return nodeToRemove;
  }

  // push a node to the back of the list
  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;

    return newNode;
  }

  // remove node from the end
  pop() {
    // if empty: return null
    if (!this.length) {
      return null;
    } else {
      // save current tail (to return it later)
      const nodeToRemove = this.tail;

      if (this.length === 1) {
        // after removing the only node, there will be no head and tail
        this.head = null;
        this.tail = null;
      } else {
        // set the node before the current tail as the new tail
        this.tail = this.tail.prev;
        // remove the connection from the new tail to the old tail
        this.tail.next = null;
        // remove the connection from the old tail to the new tail
        nodeToRemove.prev = null;
      }

      // decrease length by 1
      this.length -= 1;

      // return old tail
      return nodeToRemove;
    }
  }
}