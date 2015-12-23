#!/usr/bin/env python

from itertools import combinations

with open('input.txt', 'r') as f:
    data = f.read().split("\n")
    data = sorted([int(x) for x in data if x != ''])

matches = 0

for x in range(2, len(data)):
    for x in list(combinations(data, x)):
        if sum(x) == 150:
            matches += 1
print(matches)