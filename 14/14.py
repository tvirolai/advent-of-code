#!/usr/bin/env python

import operator

reindeerData = []
score = {}
points = {}

class Reindeer(object):
    def __init__(self, name, speed, time, rest):
        self.name = name
        self.speed = speed
        self.time = time
        self.rest = rest
        self.points = 0

    def distanceAtTimePoint(self, elapsed):
        distance = 0
        i = 1
        while True:
            distance = 
        return distance

def countDistance(name, speed, time, rest):
    distance = 0
    totalTime = 2503
    while True:
        distance += speed * time
        totalTime -= time
        totalTime -= rest
        if totalTime <= 0:
            return name, distance

jani = Reindeer("Jani", 14, 5, 18)
print(jani.distanceAtTimePoint(20))

# with open('input.txt', 'r') as f:
#     data = f.read().strip().split('\n')
#     for line in data:
#         reindeer = [line.split()[0]]
#         numbers = [int(x) for x in line.split() if x.isdigit()]
#         reindeerData.append(reindeer + numbers)

# reindeer = []

# for line in reindeerData:
#     name, distance = countDistance(line[0], line[1], line[2], line[3])
#     score[name] = distance
#     reindeer.append(Reindeer(line[0], int(line[1]), int(line[2]), int(line[3])))

# for x in range(2503):
#     scoreAtTimePoint = {}
#     for beast in reindeer:
#         scoreAtTimePoint[beast.name] = beast.distanceAtTimePoint(x)
#     sorted_scores = sorted(scoreAtTimePoint.items(), key=operator.itemgetter(1))
#     winner = sorted_scores.pop()
#     second = sorted_scores.pop()
#     for beast in reindeer:
#         if beast.name == winner[0]:
#             if not winner == second:
#                 beast.points += 1

# for beast in reindeer:
#     print(beast.name + " : " + str(beast.points ))