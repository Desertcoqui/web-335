
# Title: Assignment 3.3 Python variables and functions
# Author: Professor Krasso
# Date: 28 August 2022
# Description: python function to return calculations
# https://www.youtube.com/watch?v=u-OmVr_fT4s
# https://www.youtube.com/watch?v=J4Nd0IgW3CY


""" @methods: add, subtract, divide , multiply functions
    @description: Methods to calculate to arguments
    @params: num1, num2.
    @returns: Floating point values.
"""


def add(num1, num2):
    return num1 + num2


def subtract(num1, num2):
    return num1 - num2


def divide(num1, num2):
    return num1 / num2


def multiply(num1, num2):
    return num1 * num2


# Variables which hold arguments for above params

num1 = 3
num2 = 5

# Variables that hold functions calculated with arguments from above
# variables

added = add(num1, num2)
subtracted = subtract(num1, num2)
divided = divide(num1, num2)
multiplied = multiply(num1, num2)

# variables that hold string operators for cleaner code
action = "is"
space = " "
plus = "+"
minus = "-"
slash = "/"
times = "*"

# variable that hold output string concatinated with num operators changed to string with f"{}" method

output = str(num1)+space + plus + space + (str)(num2)+space + action + space+f"{added}\n" + str(num1)+space + minus + space + (str)(num2)+space + action + space + f"{subtracted}\n" + str(
    num1)+space + slash + space + (str)(num2)+space + action + space + f"{divided}\n" + str(num1)+space + times + space + (str)(num2)+space + action + space + f"{multiplied}\n"

print(output)
