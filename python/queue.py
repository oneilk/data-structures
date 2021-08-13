from collections import deque


class Queue:
    def __init__(self) -> None:
        self.buffer = deque()

    def enqueue(self, val):
        self.buffer.appendleft(val)

    def dequeue(self):
        return self.buffer.pop()

    def is_empty(self):
        return len(self.buffer) == 0

    def size(self):
        return len(self.buffer)


if __name__ == "__main__":
    q = Queue()
    q.enqueue(69)
    q.enqueue(420)
    print(q.dequeue())
    print(q.size())