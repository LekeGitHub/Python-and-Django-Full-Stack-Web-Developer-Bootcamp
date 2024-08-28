import re
# patterns = ['term1','term2']
# text = 'This is a string with  term1, not the term2!'
# for pattern in patterns:
#     print("I'm searching for: "+pattern)

#     if re.search(pattern,text):
#         print(pattern+" is found")
#     else:
#         print(pattern+" is not found")

# check = re.search('term1',text)
# print(check.start())



sentence = "I love to write in text all day"

# Checking for these words in the sentense above
check = ['love', 'day']


# let's check if write in sentence

for text in check:
    if re.search(text,sentence):
        print(text+" found in sentence")
        c = re.search(text,sentence)
        i = c.start()
        print('on index {}'.format(i))
    else:
        print(text+" not found in sentence")
        
    

             
