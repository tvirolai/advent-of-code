#!/usr/bin/env python

with open("input.txt", "r") as f:
	inputData = str(f.read().strip())

def transformSequenceOfSame(string):
	return str(len(string)) + string[0]

def chopStringIntoList(inputString):
	choppedData = []
	current = ""
	if len(inputString) == 1:
		choppedData.append(inputString)
	else:
		for i, char in enumerate(inputString):
			if (i == 0 or char == inputString[i-1] and i + 1 < len(
			inputString)):
				current += char
			elif (i + 1 == len(inputString)):
				if (char == current[0]):
					current += char
					choppedData.append(current)
				else:
					choppedData.append(current)
					choppedData.append(char)
			else:
				choppedData.append(current)
				current = char
	return choppedData
	
def lookAndSay(inputSequence, times):
	for x in range(0, times):
		sequence = chopStringIntoList(inputSequence)
		result = [transformSequenceOfSame(x) for x in sequence]
		inputSequence = "".join(result)
	return len(inputSequence)

print("Part 1: {0}\nPart 2: {1}".format(
lookAndSay(inputData, 40), lookAndSay(inputData, 50)))
