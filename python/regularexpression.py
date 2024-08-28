import re

patterns = ["term1",'term2']

text = 'This is a string with term1, not the term2!'

for pattern in patterns:
    print("I'm searching for: "+pattern)

    if re.search(pattern,text):
        print(pattern+" is found")
    else:
        print(pattern+" is not found")