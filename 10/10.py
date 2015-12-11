#!/usr/bin/env python

from itertools import groupby


with open("input.txt", "r") as f:
    inputData = str(f.read().strip())


def transformSequenceOfSame(string):
    return str(len(string)) + string[0]


def chopStringIntoList(inputString):
    splitString = []
    for x in [list(g) for k, g in groupby(inputString)]:
        splitString.append("".join(x))
    return splitString


def lookAndSay(inputSequence, times):
    for x in range(0, times):
        inputSequence = "".join(
            [transformSequenceOfSame(x) for x in chopStringIntoList(
            	inputSequence)])
    return len(inputSequence)

print("Part 1: {0}\nPart 2: {1}".format(
    lookAndSay(inputData, 40), lookAndSay(inputData, 50)))
