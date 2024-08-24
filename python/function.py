# arrayCheck([1, 2, 3, 1,]) -> True
# arrayCheck([1, 2, 3, 4, 1]) -> False
# arrayCheck([1, 1, 2, 1, 2, 3,]) -> True

# x = 25

# def my_func():
#     x = 50
#     return x


# my_func()
# print(x)
# print(my_func())

# name = 'This is a global name'

# def greet():
#     name = "Sammy"

#     def hello():
#         print("Hello "+ name)
    
#     hello()


# greet()

# Class

# class Sample():
#     pass

# x = Sample()
# print(type(x))

Breakfast = "Garri Cassava Eba".split()
Lunch = "Rice Beans Bread".split()
Dinner = "Yam Amala Iyan".split()

diet = []

for b in Breakfast:
    for l in Lunch:
        for d in Dinner:
            diet.append((b,l,d))

            if diet == ('Eba', 'Beans', 'Yam'):
                print("Yes")
            else:
                print("No")

