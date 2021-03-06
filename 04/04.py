#!/usr/bin/env python

import hashlib


class HashFinder(object):

    def __init__(self):
        self.key = "iwrupvqb"

    def returnHash(self, string):
        return hashlib.md5(string.encode('utf-8')).hexdigest()

    def checkHash(self, hash, zeroes):
        return (hash[0:zeroes] == ("0" * zeroes))

    def findNumber(self, zeroes):
        number = 1
        while True:
            if (self.checkHash(self.returnHash(
                    self.key + str(number)), zeroes)):
                return number
            number += 1

if __name__ == "__main__":
    hf = HashFinder()
    print("Part 1: {0}".format(hf.findNumber(5)))
    print("Part 2: {0}".format(hf.findNumber(6)))
