
# only prints to #51 ..Line 7 passes the variable to line 4,
# line 5 evaluates a true statement and prints out 51 on line 6.
# Line 7 subtracts 51- 1 to give iterations a reassigned value of 50
# but line 8 does not print the variable,
# instead it calls the print() method from line 4.
iterations = 67
print(iterations)
while iterations > 50:
    print(iterations)
    iterations = iterations - 1
print()


# prints to 50 because the variable is calling to
# line 16 after it subtracts 1
iterations_two = 67
while iterations_two > 50:
    print(iterations_two)
    iterations_two = iterations_two - 1
print(iterations_two)
