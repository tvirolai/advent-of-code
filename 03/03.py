#!/usr/bin/env python

class SantaTrip(object):
    def __init__(self):
        with open("input.txt", "r") as f:
            self.data = list(f.read())
        self.location = (0, 0)
        self.robotLocation = (0, 0)
        self.visited = [self.location]

    def partOne(self):
        for instruction in self.data:
            self.location = self.move(instruction, self.location)
        print(len(set(self.visited)))

    def partTwo(self):
        for i, instruction in enumerate(self.data):
            if i % 2 == 0:
                self.location = self.move(instruction, self.location)
            else:
                self.robotLocation = self.move(instruction, self.robotLocation)
        print(len(set(self.visited)))

    def move(self, instruction, location):
        if instruction == "^":
            location = (location[0], location[1] + 1)
        elif instruction == "v":
            location = (location[0], location[1] - 1)
        elif instruction == ">":
            location = (location[0] + 1, location[1])
        elif instruction == "<":
            location = (location[0] - 1, location[1]) 
        self.visited.append(location)
        return location

if __name__ == "__main__":
  trip = SantaTrip()
  trip.partTwo()