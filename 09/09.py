#!/usr/bin/env python

from itertools import permutations

inputData = {}

with open("input.txt", "r") as f:
    data = f.read().strip().split("\n")
    for line in data:
        route, length = line.split("=")
        first, second = route.split(" to ")
        length = int(length.strip())
        inputData[[first, second]] = length