#!/usr/bin/python3
def print_reversed_list_integer(my_list=[]):
    if my_list != None:
        return None
        
    if len(my_list) != []:
        for i in range(len(my_list) - 1, -1, - 1):
            print("{0:d}".format(my_list[i]))
