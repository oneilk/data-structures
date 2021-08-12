from pprint import pprint


class HashTable:
    def __init__(self) -> None:
        self.MAX = 10
        self.arr = [[] for i in range(self.MAX)]

    def get_hash(self, key):
        h = 0
        for char in key:
            h += ord(char)
        return h % self.MAX

    def __setitem__(self, key, val):
        h = self.get_hash(key)
        found = False
        for idx, element in enumerate(self.arr[h]):
            if len(element) == 2 and element[0] == key:
                self.arr[h][idx] = (key, val)
                found = True
                break

        if not found:
            self.arr[h].append((key, val))

    def __getitem__(self, key):
        h = self.get_hash(key)

        for element in self.arr[h]:
            if element[0] == key:
                return element[1]

    def __delitem__(self, key):
        h = self.get_hash(key)
        if len(self.arr[h]):
            for idx, element in enumerate(self.arr[h]):
                if element[0] == key:
                    del self.arr[h][idx]


if __name__ == "__main__":
    t = HashTable()
    t["march 6"] = 130
    t["march 6"] = 50
    t["march 1"] = 20
    t["dec 17"] = 27
    t["march 17"] = 5

    del t["march 17"]

    pprint(t.arr)
