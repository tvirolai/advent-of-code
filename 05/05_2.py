#!/bin/env python


class LineCheck(object):

    def __init__(self):
        with open('input.txt', 'r') as f:
            self.data = f.read().split("\n")

    def containsRepeatingPair(self, string):
        for i, char in enumerate(string):
            if (i + 1 < len(string)):
                twoChars = char + string[i + 1]
                if (len(string.split(twoChars)) >= 3):
                    return True
        return False

    def containsRepeatingLetters(self, string):
        for i, char in enumerate(string):
            if (i + 2 < len(string)):
                if (char == string[i + 2]):
                    return True
        return False

    def isNice(self, string):
        return (self.containsRepeatingPair(string) and self.containsRepeatingLetters(string))

    def countNiceLines(self):
        print(len([line for line in self.data if self.isNice(line)]))

if __name__ == "__main__":
    program = LineCheck()
    program.countNiceLines()
