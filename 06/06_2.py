#!/bin/env python


class LightControl(object):

    def __init__(self):
        with open("input.txt", "r") as f:
            self.data = f.read().split("\n")
            self.data = [x for x in self.data if len(x) > 5]
        self.lights = {x: 0 for x in self.returnAllPoints((0, 0), (999, 999))}

    def read(self):
        for i, line in enumerate(self.data):
            print("Processing line {0} / {1}".format(i + 1, len(self.data)))
            self.processCommand(line)
        print(sum(self.lights.values()))

    def processCommand(self, line):
        instructions = self.processLine(line)
        points = self.returnAllPoints(
            instructions["point1"], instructions["point2"])
        if (instructions["command"] == "on"):
            for x in points:
                self.lights[x] += 1
        elif (instructions["command"] == "off"):
            for x in points:
                if (self.lights[x] > 0):
                    self.lights[x] -= 1
        elif (instructions["command"] == "toggle"):
            for x in points:
                self.lights[x] += 2

    def returnAllPoints(self, point1, point2):
        allPoints = []
        cursor = point1
        while True:
            allPoints.append(cursor)
            while cursor[0] < point2[0]:
                cursor = (cursor[0] + 1, cursor[1])
                allPoints.append(cursor)
            if (cursor == point2):
                break
            else:
                cursor = (point1[0], cursor[1] + 1)
        return allPoints

    def processLine(self, line):
        if not "toggle" in line:
            _, command, first, _, second = line.split(" ")
        else:
            command, first, _, second = line.split(" ")
        return {
            "command": command,
            "point1": (int(first.split(",")[0]), int(first.split(",")[1])),
            "point2": (int(second.split(",")[0]), int(second.split(",")[1]))
        }

if __name__ == "__main__":
    lc = LightControl()
    lc.read()
