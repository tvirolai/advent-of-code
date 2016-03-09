#!/bin/env python

def valueByIndex(n):
    value = 20151125
    if n == 0:
        return value
    elif n == 1:
        return value * 252533 % 33554393
    else:
        return valueByIndex(n-1) * 252533 % 33554393

targetRow = 3010
targetColumn = 3019

print(valueByIndex(400))

def findIndex(x, y):
    pass

