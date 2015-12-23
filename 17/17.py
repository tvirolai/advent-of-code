#!/usr/bin/env python

from itertools import combinations

with open('input.txt', 'r') as f:
    data = f.read().split("\n")
    data = sorted([int(x) for x in data if x != ''])


def part1():
    matches = 0
    for x in range(2, len(data)):
        for y in list(combinations(data, x)):
            if sum(y) == 150:
                matches += 1
    print(matches)


def part2():
    lengths = []
    for x in range(2, len(data)):
        for y in list(combinations(data, x)):
            if sum(y) == 150:
                lengths.append(len(y))
    minim = min(lengths)
    count = 0
    for x in list(combinations(data, minim)):
        if sum(x) == 150:
            count += 1
    print(count)

part1()
part2()
