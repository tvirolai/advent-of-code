#!/usr/bin/env python

class FloorPuzzle(object):
    def __init__(self):
        self.floor = 0
        with open("input.txt", "r") as f:
            self.data = list(f.read())

    def lastFloor(self):
        for char in self.data:
            if (char == "("):
                self.floor += 1
            elif (char == ")"):
                self.floor -= 1
        print(self.floor)

    def firstToEnterBottomFloor(self):
        for i, char in enumerate(self.data):
            if (char == "("):
                self.floor += 1
            elif (char == ")"):
                self.floor -= 1
            if self.floor == -1:
                print(i + 1)
                break

if __name__ == "__main__":
    floorPuzzle = FloorPuzzle()
    floorPuzzle.firstToEnterBottomFloor()