#!/usr/bin/python3

from calculator_1 import add, sub, mul, div

a = 10
b = 5

if __name__ == '__main__':
    print("{0} + {1} = {2}".format(a, b, calculator_1.add(a, b)))
    print("{0} - {1} = {2}".format(a, b, calculator_1.sub(a, b)))
    print("{0} * {1} = {2}".format(a, b,calculator_1. mul(a, b)))
    print("{0} / {1} = {2}".format(a, b, calculator_1.div(a, b)))
