from pprint import pp, pprint
from collections import deque


class Stack:
    def __init__(self) -> None:
        self.container = deque()

    def push(self, val) -> None:
        self.container.append(val)

    def pop(self):
        return self.container.pop()

    def peek(self):
        return self.container[-1]

    def is_empty(self):
        return len(self.container) == 0

    def size(self):
        return len(self.container)


if __name__ == "__main__":
    s = Stack()
    s.push(69)
    s.push(420)
    pprint(s.is_empty())
    pprint(s.peek())