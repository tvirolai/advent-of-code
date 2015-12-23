#!/usr/bin/env python

from itertools import permutations

with open('input.txt', 'r') as f:
    data = f.read().strip().split('\n')

happiness = {}

for line in data:
    person1 = line.split(" ")[0]
    person2 = line.split(" ")[-1][0:-1]
    score = [int(x) for x in line.split() if x.isdigit()].pop()
    if ("lose") in line:
        score = score * -1
    happiness[frozenset((person1, person2))] = score

print(happiness)