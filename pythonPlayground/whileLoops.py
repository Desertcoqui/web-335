
# only prints to 51 because once last line of code is executed and reiterates to line four, there is no print statement after line six to continue the code. So the code breaks at this point.
iterations = 200
while iterations > 50:
    print(iterations)
    iterations = iterations - 1


iterations = 200
while iterations > 50:
    print(iterations)
    iterations = iterations - 1
print(iterations)
