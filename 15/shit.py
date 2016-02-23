import re

cookies = []
for line in open('input.txt').readlines():
    g = re.match('(.*): capacity (\-?)(\d+), durability (\-?)(\d+), flavor (\-?)(\d+), texture (\-?)(\d+), calories (\-?)(\d+)', line).groups()
    cookie = [int(g[i]) * (-1 if g[i-1] else 1) for i in xrange(2,12,2)]
    cookies.append(cookie)

best_total = 0
best_for_calories = 0
for i in xrange(0, 101):
    for j in xrange(0, 101-i):
        for k in xrange(0, 101-i-j):
            l = 100 - i - j - k
            nums = [i*cookies[0][p] + j*cookies[1][p] + k*cookies[2][p] + l*cookies[3][p] for p in xrange(0, 5)]
            if min(nums) <= 0:
                continue
            total = reduce(lambda x, y: x * y, nums[:-1])
            if total > best_total:
                best_total = total
                print str(i) + " " + str(j) + " " + str(k) + " " + str(l)
            if nums[4] == 500:
                best_for_calories = max(total, best_for_calories)

print best_total, best_for_calories