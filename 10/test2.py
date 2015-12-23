from itertools import groupby

def test(string):
  splitString = []
  for x in [list(g) for k, g in groupby(string)]:
    splitString.append("".join(x))
  return splitString

print(test("1122455"))