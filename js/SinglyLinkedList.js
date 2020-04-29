function Node (data) {
	this.data = data;
	this.next = null;
}

function SinglyLinkedList () {
	this._length = 0;
	this.head = null;
}

SinglyLinkedList.prototype.push = function (data) {

	let node = new Node(data);
	let currentNode = this.head;

	// appending to an empty list
	if (!currentNode) {
		this.head = node;
		this._length++;
		return node;
	}

	// appending to a non-empty list
	while (currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;

	this._length++;

	return node;
}

SinglyLinkedList.prototype.pop = function (data) {

	let nodeToRemove = this.head;

	if (nodeToRemove != null) {
		if (this._length == 1) {
			this.head = null;
		} else if (this._length == 2) {
			nodeToRemove = this.head.next;
			this.head.next = null;
		} else {
			let prevNode = nodeToRemove;
			while (nodeToRemove.next != null) {
				prevNode = nodeToRemove;
				nodeToRemove = nodeToRemove.next;
			}
			prevNode.next = null;
		}
		this._length--;
	}
	return nodeToRemove;
}

SinglyLinkedList.prototype.shift = function (data) {
	let nodeToRemove = this.head;
	if (nodeToRemove != null) {
		this._length--;
		this.head = this.head.next;
	}
	return nodeToRemove;
}

SinglyLinkedList.prototype.unshift = function (data) {

	let oldHead = this.head;
	let newHead = new Node(data);

	if (oldHead == null) {
		this.head = newHead;
	} else {
		this.head = newHead;
		this.head.next = oldHead;
	}

	this._length++;

	return newHead;
}