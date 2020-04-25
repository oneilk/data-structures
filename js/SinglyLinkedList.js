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