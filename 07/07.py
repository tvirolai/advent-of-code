class BitwiseLogic(object):

    def __init__(self):
        with open('input.txt', 'r') as f:
            self.data = [x for x in f.read().split("\n") if len(x) > 5]
        self.wires = {}

    def processLine(self, line, b=0):
        wire = line.split(" -> ")[1]
        if len(line.split(" ")) == 3:
            operand = line.split(" -> ")[0]
            try:
                operand = int(operand)
                self.wires[wire] = operand
            except ValueError as e:
                try:
                    self.wires[wire] = self.wires[operand]
                except:
                    pass
        elif "AND" in line:
            op1, op2 = line.split(" -> ")[0].split(" AND ")
            if (op1 in self.wires and op2 in self.wires):
                self.wires[wire] = self.wires[op1] & self.wires[op2]
            try:
                op1 = int(op1)
                self.wires[wire] = op1 & self.wires[op2]
            except:
                pass
        elif "OR" in line:
            op1, op2 = line.split(" -> ")[0].split(" OR ")
            if (op1 in self.wires and op2 in self.wires):
                self.wires[wire] = self.wires[op1] | self.wires[op2]
        elif "LSHIFT" in line:
            op1, number = line.split(" -> ")[0].split(" LSHIFT ")
            if (op1 in self.wires):
                self.wires[wire] = self.wires[op1] << int(number)
        elif "RSHIFT" in line:
            op1, number = line.split(" -> ")[0].split(" RSHIFT ")
            if (op1 in self.wires):
                self.wires[wire] = self.wires[op1] >> int(number)
        elif "NOT" in line:
            op1 = line.split(" -> ")[0].split(" ")[1]
            if (op1 in self.wires):
                self.wires[wire] = ~ self.wires[op1] & 0xffff
        if b > 0:
            self.wires["b"] = b

    def loop(self, b):
        while "a" not in self.wires:
            for line in self.data:
                self.processLine(line, b)
        return self.wires["a"]

bl = BitwiseLogic()
part1 = bl.loop(0)
print(part1)
bl2 = BitwiseLogic()
print(bl2.loop(part1))
