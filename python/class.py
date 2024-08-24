# class Dog():

#     specie = "mammal"
    
#     def __init__(self, breed, name):
#         self.breed = breed
       
#         self.name = name


# myDog = Dog(breed = "lab", name = "sammy")


# print(myDog.breed)
# print(myDog.name)
# print(myDog.specie)


# class Circle():
#     pi = 3.14

#     def __init__(self, radius=1):
#         self.radius = radius
    
#     def area(self):
#         return self.radius * self.radius * Circle.pi
    
#     def set_radius(self,new_r):
#         self.radius = new_r



# myc = Circle(3)
# myc.set_radius(900)

# print(myc.area())


class Animal():

    def __init__(self) -> None:
        print("Animal Created")

    def whoAmI(self):
        print("Animal")
    
    def eat(self):
        print("Eating")

class Dog(Animal):
    def __init__(self) -> None:
        print("Dog Created")

    def bark(self):
        print("WoOf!!!")
    
    def eat(self):
        print("Dog is Eating")

# myDog = Dog()
# myDog.whoAmI()
# myDog.eat()
# myDog.bark()

class Book():

    def __init__(self, title, author, pages) -> None:
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self) -> str:
        return "Title: {}, Author: {}, Pages: {}".format(self.title,self.author,self.pages) 

    def __len__(self):
        return self.pages
    
    def __del__(self):
        print("a book is destroyed")
    
    


b = Book("Python", "Jose", 200)
print(b.author)
del b