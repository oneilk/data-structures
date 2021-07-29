class Node:
    def __init__(self, data=None, next=None) -> None:
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def insert_at_beginning(self, data) -> None:
        node = Node(data, self.head)
        self.head = node

    def insert_at_end(self, data) -> None:
        node = Node(data)
        if self.head is None:
            self.head = node
        else:
            itr = self.head

            while itr.next:
                itr = itr.next

            itr.next = node

    def insert_values(self, data_list) -> None:
        self.head = None
        for data in data_list:
            self.insert_at_end(data)

    def get_length(self) -> int:
        count = 0
        itr = self.head

        while itr:
            count += 1
            itr = itr.next

        return count

    def remove_at(self, index) -> None:
        if index < 0 or index >= self.get_length():
            raise Exception("Invalid index")

        if index == 0:
            self.head = self.head.next
            return

        count = 0
        itr = self.head
        while count + 1 != index:
            count += 1
            itr = itr.next

        itr.next = itr.next.next

    def insert_at(self, index, data) -> None:
        if index == 0:
            self.insert_at_beginning(data)
            return

        if index == self.get_length():
            self.insert_at_end(data)
            return

        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                node = Node(data, itr.next)
                itr.next = node
                break

            itr = itr.next
            count += 1

    def print(self) -> None:
        if self.head is None:
            print("Linked List is empty")
            return

        itr = self.head
        llstr = ""
        while itr:
            llstr += str(itr.data) + " --> "
            itr = itr.next

        print(llstr)


if __name__ == "__main__":
    ll = LinkedList()
    ll.insert_values(["pig", "elephant", "horse", "chicken"])
    ll.insert_at(6, "eagle")
    ll.insert_at(2, "eagle")
    ll.print()
