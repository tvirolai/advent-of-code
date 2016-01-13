#!/usr/bin/env python

with open("input.txt", "r") as f:
    data = map(lambda x: 1 if x == "(" else -1, list(f.read()))

p1, p2 = sum(data), list(1 + x + sum(data[:i]) for i, x in enumerate(data)).index(-1)
print("Part 1: {0}\nPart 2: {1}".format(p1, p2))