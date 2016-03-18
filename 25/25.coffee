countValue = (value) ->
  value * 252533 % 33554393

findIndex = (x, y) ->
  x = x + (y - 1)
  ([0..x - 1].reduce (t, s) -> t + s) + y

findValue = (x, y) ->
  index = findIndex(x, y)
  i = 1
  value = 20151125
  while i < index
    value = countValue(value)
    ++i
  value

console.log findValue(3010, 3019)
