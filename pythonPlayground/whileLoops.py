
# only prints to 51 because once last line of code is executed and reiterates to line four, there is no print statement after line six to continue the code. So the code breaks at this point.
iterations = 65
print(iterations)
while iterations > 50:
    print(iterations)
    iterations = iterations - 1
print()


# prints to 50 because the variable is calling to line 16 after it subtracts 1
iterations_two = 65
while iterations_two > 50:
    print(iterations_two)
    iterations_two = iterations_two - 1
print(iterations_two)
