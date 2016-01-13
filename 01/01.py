#!/usr/bin/env python


def accumulate(values, total=0):
    return (x + sum(values[:i]) for i, x in enumerate(values))

with open("input.txt", "r") as f:
    data = map(lambda x: 1 if x == "(" else -1, list(f.read()))

print("Part 1: {0}".format(sum(data)))
print("Part 2: {0}".format(list(accumulate(data)).index(-1) + 1))
