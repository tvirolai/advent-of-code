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

print(chopStringIntoList("124091222"))