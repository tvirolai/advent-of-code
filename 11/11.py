#!/usr/bin/env python

from itertools import groupby

with open("input.txt", "r") as f:
    inputData = str(f.read().strip())


def incrementChar(character):
    if character == "z":
        return "a"
    else:
        return chr(ord(character) + 1)


def incrementString(string):
    if string[-1] == "z":
        stringArray = splitAString(string)
        last = stringArray.pop()
        string = incrementString("".join(stringArray))
        return string + "a" * len(last)
    else:
        return string[0:-1] + incrementChar(string[-1])


def containsForbiddenChars(string):
    found = [x for x in string if x in ["i", "o", "l"]]
    return False if len(found) == 0 else True


def containsAtLeastTwoOverLappingChars(string):
    overlappingSeq = set([x for x in splitAString(string) if len(x) > 1])
    return True if len(overlappingSeq) > 1 else False


def splitAString(string):
    splitString = []
    for x in [list(g) for k, g in groupby(string)]:
        splitString.append("".join(x))
    return splitString


def isValid(string):
    if not containsForbiddenChars(string) and containsAtLeastTwoOverLappingChars(string) and containsIncreasingSeqOfThree(string):
        return True
    else:
        return False


def containsIncreasingSeqOfThree(string):
    for x in range(2, len(string)):
        if ord(string[x-2]) + 2 == ord(string[x-1]) + 1 == ord(string[x]):
            return True
    return False

results = []

while len(results) < 2:
    inputData = incrementString(inputData)
    if (isValid(inputData)):
        results.append(inputData)

print(results)
