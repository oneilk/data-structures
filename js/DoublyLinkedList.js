function Node(data) {
	this.data = data;
	this.next = null;
	this.prev = null;
}

function DoublyLinkedList() {
	this._length = 0;
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype.length = function () {
	return this._length;
}

DoublyLinkedList.prototype.isEmpty = function () {
	return this.length() === 0;
}

DoublyLinkedList.prototype.addFirst = function(data) {
	let newNode = new Node(data);
	if (this.isEmpty()) {
		this.head = this.tail = newNode;
	} else {
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
	}
	this._length++;
}

DoublyLinkedList.prototype.addLast = function(data) {
	let newNode = new Node(data);
	if (this.isEmpty()) {
		this.head = this.tail = newNode;
	} else {
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
	}
	this._length++;
}

DoublyLinkedList.prototype.removeFirst = function() {
	let data = null;
	if (!this.isEmpty()) {
		data = this.head.data;
		this.head = this.head.next;
		this.head.prev = null;
		this._length--;
		if (this._length == 1) {
			this.tail = this.head;
		}
	}
	return data;
}

DoublyLinkedList.prototype.removeLast = function () {
	let data = null;
	if (!this.isEmpty()) {
		data = this.tail.data;
		this.tail = this.tail.prev;
		this.tail.next = null;
		this._length--;
		if (this._length == 1) {
			this.head = this.tail
		}
	}
	return data;
}