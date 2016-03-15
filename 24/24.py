#!/bin/env python
# -*- coding: utf-8 -*-

from itertools import combinations

with open("input.txt", "r") as f:
    data = [int(x) for x in f.read().split("\n") if x.isdigit()]


def AOC24(data, packageWeight, part):
    group1 = []
    i = 2
    while len(group1) == 0:
        group1 = [x for x in combinations(data, i) if sum(x) == packageWeight]
        i += 1
    results = []
    for item in group1:
        quantumWeight = reduce(lambda x, y: x * y, [x for x in item])
        results.append(quantumWeight)
    print("Part {0}: {1}".format(part, sorted(results)[0]))

AOC24(data, sum(data) / 3, 1)
AOC24(data, sum(data) / 4, 2)
