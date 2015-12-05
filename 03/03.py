#!/bin/env python

class SantaTrip(object):
    def __init__(self):
        with open("input.txt", "r") as f:
            self.data = list(f.read())
        self.location = (0, 0)
        self.visited = [(0, 0)]

    def houseCount(self):
        for instruction in self.data:
            self.move(instruction)
        print(len(set(self.visited)))

    def move(self, instruction):
        if instruction == "^":
            self.location = (self.location[0], self.location[1] + 1)
        elif instruction == "v":
            self.location = (self.location[0], self.location[1] - 1)
        elif instruction == ">":
            self.location = (self.location[0] + 1, self.location[1])
        elif instruction == "<":
            self.location = (self.location[0] - 1, self.location[1]) 
        self.visited.append(self.location)

if __name__ == "__main__":
  trip = SantaTrip()
  trip.houseCount()