#!/bin/env python

import re

class Turinglock(object):

    def __init__(self, inputFile, A, B):
        self.registers = {"a": A, "b": B}
        self.data = self.readData(inputFile)

    def readData(self, inputFile):
        with open(inputFile, "r") as f:
            return [x for x in f.read().split("\n") if len(x) > 1]

    def process(self, line, index):
        '''
        The function processes an instruction, edits register and returns next index.
        '''
        instruction = line[0:3]
        register = line[4:5] if line[4:5].isalpha() else False
        numbers = [int(x) for x in re.findall(r'[-+]\d+', line)] 
        numbers = numbers[0] if len(numbers) > 0 else False

        #Process instructions
        if instruction == "jmp":
            return index + numbers
        elif instruction == "hlf":
            self.registers[register] /= 2
        elif instruction == "tpl":
            self.registers[register] *= 3
        elif instruction == "inc":
            self.registers[register] += 1
        elif instruction == "jie":
            if self.registers[register] % 2 == 0:
                return index + numbers
        elif instruction == "jio":
            if self.registers[register] == 1:
                return index + numbers
        return index + 1

    def solve(self):
        i = 0
        while (0 <= i < len(self.data)):
            i = lock.process(self.data[i], i)
        return self.registers["b"]

if __name__ == "__main__":
    lock = Turinglock("input.txt", 0, 0)
    print("Part 1: {0}".format(lock.solve()))
    lock = Turinglock("input.txt", 1, 0)
    print("Part 2: {0}".format(lock.solve()))
