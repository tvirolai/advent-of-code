#!/usr/bin/env python3

from random import randint

atom = ""
instrs = {}
ins = []

with open("input.txt") as f:
    rows = [x for x in f.read().split("\n") if x != '']
    atom = rows.pop()
    for r in rows:
        fr, to = r.split(" => ")
        ins.append(to)
        instrs[to] = fr

steps = 0

while atom != "e":
    i = randint(0, len(ins)-1)
    atomBefore = atom
    atomAfter = atom.replace(ins[i], instrs[ins[i]], 1)
    if atom == "e":
        break
    elif atomBefore != atomAfter:
        steps += 1
        atom = atomAfter

print(steps)
