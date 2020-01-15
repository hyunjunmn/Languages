# Positional argument활용

#def plus(a,b):
 #   return a-b

#result = plus(b=30,a=1)
#print(result)

#def say_hello(name,age):
 #   return f"Hello {name} your are {age} years old"#string formatting하는법 앞에 f붙여주고 변수에 {}삽입

#hello=say_hello("Jun","25")
#print(hello)


#조건문 활용
#def plus(a,b):
 #   if type(b) is int or type(b) is float:
  #      return a+b
   # else:
    #    return None

#print(plus(12,0.1))

def age_check(age):
    print(f"You're {age}")
    if age<18:
        print("You cant drink")
    elif age==18:
        print("You are NB")
    elif age>20 and age<25:
        print("You re still young")
    else:
        print("Keep drink")

age_check(23)